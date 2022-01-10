<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{

    /**
     * @Get("/", middleware="web")
     */
    public function index()
    {
        return response('ok');
    }

    /**
     * @Get("gerador-de-licencas", as="gerador_de_licencas", middleware="web")
     */
    public function geradorDeLicencas()
    {
        return view('main');
    }
}
