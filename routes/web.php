<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::view('home', 'home')
	->name('home')
	->middleware(['auth', 'verified']);
