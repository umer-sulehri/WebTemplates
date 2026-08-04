<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        // Yahan fields likho
        'title',
        'learnmore',
        'description',
        'image',
        'icon',
        'status',
    ];
}