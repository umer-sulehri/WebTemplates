<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('teams', function (Blueprint $table) {

            if (!Schema::hasColumn('teams', 'bio')) {
                $table->text('bio')->nullable();
            }

            if (!Schema::hasColumn('teams', 'experience')) {
                $table->string('experience')->nullable();
            }

            if (!Schema::hasColumn('teams', 'education')) {
                $table->string('education')->nullable();
            }

            if (!Schema::hasColumn('teams', 'email')) {
                $table->string('email')->nullable();
            }

            if (!Schema::hasColumn('teams', 'phone')) {
                $table->string('phone')->nullable();
            }

            if (!Schema::hasColumn('teams', 'skills')) {
                $table->text('skills')->nullable();
            }

            if (!Schema::hasColumn('teams', 'linkedin')) {
                $table->string('linkedin')->nullable();
            }

            if (!Schema::hasColumn('teams', 'instagram')) {
                $table->string('instagram')->nullable();
            }

            if (!Schema::hasColumn('teams', 'facebook')) {
                $table->string('facebook')->nullable();
            }

            if (!Schema::hasColumn('teams', 'twitter')) {
                $table->string('twitter')->nullable();
            }

            if (!Schema::hasColumn('teams', 'status')) {
                $table->boolean('status')->default(true);
            }

        });
    }

    public function down(): void
    {
        Schema::table('teams', function (Blueprint $table) {

            $columns = [
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

            foreach ($columns as $column) {
                if (Schema::hasColumn('teams', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};