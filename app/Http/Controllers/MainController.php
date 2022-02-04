<?php

namespace App\Http\Controllers;

use App\DTO\LogDAO;
use Illuminate\Http\Request;

use YouTube\YouTubeDownloader;
use YouTube\YouTubeStreamer;
use App\Services\LogService;
use Illuminate\Support\Facades\Validator;

class MainController extends Controller
{
    private const MIME_MP4 = "video/mp4";

    /**
     * @Get("/", middleware="web")
     */
    public function index()
    {
        return view("game");
    }

    /**
     * @Any("gerador-de-licencas", as="gerador_de_licencas", middleware="web")
     */
    public function geradorDeLicencas()
    {
        return view('main');
    }

    /**
     * @Post("send-log", middleware="guest")
     */
    public function sendLog(Request $request)
    {
        $json = $request->json()->all();

        $validator = Validator::make($json, [
            "name" => "required",
            "description" => "required",
            "service" => "required",
            "token" => "required",
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 500);
        }

        $logDao = new LogDAO($json);

        LogService::saveLog($logDao);

        return response('', 200);
    }

    /**
     * @Any("youtube-to-mp4", as="youtube-to-mp4", middleware="guest")
     */
    public function youtubeDownload(Request $request)
    {
        if($request->isMethod('GET')){
            return view('youtube-download');
        }

        $youtube = new YouTubeDownloader();

        $stream = new YouTubeStreamer();

        $downloadOptions = $youtube->getDownloadLinks($request->json('videoUrl'));

        $formats = $downloadOptions->getAllFormats();

        $currentFormat = null;

        foreach ($formats as $format) {
            $mimeType = $format->getCleanMimeType();

            if (self::MIME_MP4 === $mimeType) {
                $currentFormat = $format;
                break;
            }
        }

        $url = $currentFormat->url;

        $stream->stream($url);
    }
}
