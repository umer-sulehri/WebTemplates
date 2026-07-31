<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {

            $table->id();

            $table->string('title');

            $table->string('slug')->unique();

            $table->string('category');

            $table->text('description');

            $table->string('image')->nullable();

            $table->string('project_url')->nullable();

            $table->string('github_url')->nullable();

            $table->json('technologies')->nullable();

            $table->boolean('featured')->default(false);

            $table->boolean('status')->default(true);

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};