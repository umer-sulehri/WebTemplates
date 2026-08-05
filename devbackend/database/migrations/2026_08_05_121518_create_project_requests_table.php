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
        Schema::create('project_requests', function (Blueprint $table) {
            $table->id();

            $table->string('full_name');
            $table->string('email');
            $table->string('phone');
            $table->string('company')->nullable();

            $table->string('service');
            $table->string('project_title');

            $table->text('description');

            $table->string('budget');
            $table->string('timeline');

            $table->string('contact_method');

            $table->string('requirement_file')->nullable();

            $table->enum('status', [
                'pending',
                'contacted',
                'in_progress',
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
        Schema::dropIfExists('project_requests');
    }
};
