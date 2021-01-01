<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPassword extends ResetPasswordNotification implements ShouldQueue
{
    use Queueable;

    public function __construct()
    {
        $this->queue = 'auth';
    }
}
