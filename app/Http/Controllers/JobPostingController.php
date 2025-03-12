<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job_Posting;

class JobPostingController extends Controller
{
    public function index() {
        $findJob = Job_Posting::orderBy('created_at', 'DESC')->get();
        return Inertia::render('Jobs/find-job',
        [
            'findJob' => $findJob
        ]);
    }

    public function create() {
        return Inertia::render('Jobs/create-job');
    }
}
