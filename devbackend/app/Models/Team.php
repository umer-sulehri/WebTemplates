<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'role',
        'image',
        'bio',
        'experience',
        'education',
        'email',
        'phone',
        'skills',
        'linkedin',
        'instagram',
        'facebook',
        'twitter',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}