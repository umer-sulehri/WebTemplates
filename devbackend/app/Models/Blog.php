<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [

        'title',
        'slug',
        'category',
        'image',
        'author',
        'description',
        'content',
        'featured',
        'status',

    ];
}
