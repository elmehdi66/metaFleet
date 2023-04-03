<?php

namespace App\Http\Controllers;

use App\Models\Itineraire;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{

    public function index()
    {
        return Inertia::render('Roads', [
            'component' => 'itineraires/Roads',
                'itineraires' => Itineraire::all()->map(function ($item) {
                    return [
                        'id_vehicule' => $item->id_vehicule,
                        'id_destination' => $item->id_destination,
                        'depart' => $item->depart,
                        'arrivee' => $item->arrivee
                    ];
                })
            ]
        );
    }
}
