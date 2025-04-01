<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Job_Posting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobPostingController extends Controller
{
    public function index() {
        $findJob = Job_Posting::orderBy('created_at', 'DESC')
        ->get()
        ->map(function ($job) {
            return [
                'id' => $job->id,
                'company' => $job->company,
                'logo' => asset('images/' . $job->logo),
                'title' => $job->title,
                'location' => $job->location,
                'type' => $job->type,
                'salary' => number_format($job->salary),
                'description' => $job->description,
                'created_at' => $job->created_at->diffForHumans(),
            ];
        });
        return Inertia::render('welcome', [
            'data' => $findJob
        ]);
    }

    public function create() {
        return Inertia::render('Jobs/create-job');
    }

    public function store(Request $request) {
        $request->validate([
            'company' => 'required',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required',
            'description' => 'required',
            'location' => 'required',
            'salary' => 'required',
            'type' => 'required',
        ]);

        $data = $request->all();

        $data['salary'] = (int) str_replace(',', '', $data['salary']);
        $data['user_id'] = Auth::user()->id;

        if($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            $data['logo'] = $name;
        }

        Job_Posting::create($data);
        return redirect()->route('dashboard');
    }
}
