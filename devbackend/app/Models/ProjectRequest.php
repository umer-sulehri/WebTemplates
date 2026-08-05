<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectRequest extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'company',
        'service',
        'project_title',
        'description',
        'budget',
        'timeline',
        'contact_method',
        'requirement_file',
        'status',
    ];
}