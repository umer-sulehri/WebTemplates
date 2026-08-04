<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('schedule_calls', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('email');

            $table->string('phone')->nullable();

            $table->string('service')->nullable();

            $table->date('date');

            $table->time('time');

            $table->text('message')->nullable();

            $table->enum('status', [
                'pending',
                'confirmed',
                'completed',
                'cancelled'
            ])->default('pending');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedule_calls');
    }
};
