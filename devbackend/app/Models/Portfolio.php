<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'description',
        'image',
        'project_url',
        'github_url',
        'technologies',
        'featured',
        'status',
    ];

    protected $casts = [
        'technologies' => 'array',
        'featured' => 'boolean',
        'status' => 'boolean',
    ];
}