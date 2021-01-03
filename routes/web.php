<?php


$router->get('/', function () {
    return inertia('Landing');
});

$router->view('home', 'home')
    ->name('home')
    ->middleware(['auth', 'verified']);
