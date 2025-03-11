<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job_Posting extends Model
{
    protected $fillable =[
        'user_id',
        'company',
        'logo',
        'title',
        'location',
        'type',
        'salary',
        'description'
    ];
}
