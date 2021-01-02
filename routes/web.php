<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('Landing');
});

Route::view('home', 'home')
    ->name('home')
    ->middleware(['auth', 'verified']);
