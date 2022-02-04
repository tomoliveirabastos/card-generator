<?php

namespace App\Services;

use App\Models\Logs;
use App\DTO\LogDAO;

class LogService
{
    public static function saveLog(LogDAO $logDao): void
    {
        Logs::create([
            "name" => $logDao->getName(),
            "description" => $logDao->getDescription(),
            "service" => $logDao->getService(),
            "token" => $logDao->getToken(),
        ]);
    }
}
