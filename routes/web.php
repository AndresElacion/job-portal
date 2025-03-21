<?php

use App\Http\Controllers\JobPostingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [JobPostingController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/create-job', [JobPostingController::class, 'create'])->name('create-job');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
