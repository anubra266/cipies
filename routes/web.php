<?php


$router->get('/', function () {
    return view('welcome');
});

$router->view('home', 'home')
    ->name('home')
    ->middleware(['auth', 'verified']);
