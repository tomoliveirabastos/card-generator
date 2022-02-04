<?php

namespace App\Models;

use App\Interfaces\LogInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    use HasFactory;
    protected $table = "logs";

    protected $fillable = [
        "name",
        "description",
        "service",
        "token"
    ];
}
