<?php

namespace App\Observers;

use App\Models\Flight;

class FlightObserver
{
    /**
     * Handle the Flight "created" event.
     *
     * @param  \App\Models\Flight  $flight
     * @return void
     */
    public function created(Flight $flight)
    {
        //
    }

    /**
     * Handle the Flight "updated" event.
     *
     * @param  \App\Models\Flight  $flight
     * @return void
     */
    public function updated(Flight $flight)
    {
        //
    }

    /**
     * Handle the Flight "deleted" event.
     *
     * @param  \App\Models\Flight  $flight
     * @return void
     */
    public function deleted(Flight $flight)
    {
        //
    }

    /**
     * Handle the Flight "restored" event.
     *
     * @param  \App\Models\Flight  $flight
     * @return void
     */
    public function restored(Flight $flight)
    {
        //
    }

    /**
     * Handle the Flight "force deleted" event.
     *
     * @param  \App\Models\Flight  $flight
     * @return void
     */
    public function forceDeleted(Flight $flight)
    {
        //
    }
}
