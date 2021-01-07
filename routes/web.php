<?php


$router->get('/', fn () => view('welcome'));

$router->group(['middleware' => ['auth', 'verified']], function () use ($router) {
    $router->get('/home', fn () => inertia('Home'))->name('home');
});
