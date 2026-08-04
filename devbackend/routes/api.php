<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ScheduleCallController;


Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('portfolios', PortfolioController::class);

Route::apiResource('services', ServiceController::class);

Route::apiResource('testimonials', TestimonialController::class);

Route::get('/blogs/slug/{slug}', [BlogController::class, 'getBySlug']);

Route::apiResource('blogs', BlogController::class);

Route::apiResource('schedule-calls', ScheduleCallController::class);

Route::middleware('auth:sanctum')->group(function () {


    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});