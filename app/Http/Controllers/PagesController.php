<?php

namespace App\Http\Controllers;

use App\Models\Itineraire;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{

    public function index()
    {
        $itineraires = Itineraire::all();
        return Inertia::render('Roads', [
            'name' => 'mehdi'
        ]);
    }
}
