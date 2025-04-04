<?php

use App\Http\Controllers\JobPostingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [JobPostingController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/create/job', [JobPostingController::class, 'create'])->name('create-job');
    Route::get('/jobs', [JobPostingController::class, 'index'])->name('jobs.index');
    Route::post('/store/job', [JobPostingController::class, 'store'])->name('store-job');
    Route::get('/edit/job/{id}', [JobPostingController::class, 'edit'])->name('edit-job');
    Route::post('/update/job/{id}', [JobPostingController::class, 'update'])->name('update-job');
    Route::get('/delete/job/{id}', [JobPostingController::class, 'destroy'])->name('delete-job');
    Route::get('/show/job/{id}', [JobPostingController::class, 'show'])->name('show-job');
    Route::get('/apply/job/{id}', [JobPostingController::class, 'apply'])->name('apply-job');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
