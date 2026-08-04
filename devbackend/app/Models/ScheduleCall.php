<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduleCall extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'service',
        'date',
        'time',
        'message',
        'status'
    ];
    protected $casts = [
        'date' => 'date:Y-m-d',
        'time' => 'datetime:H:i',
    ];
}
