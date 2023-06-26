<?php

namespace App\Http\Controllers;

use App\Models\Conducteur;
use App\Models\Destination;
use App\Models\Itineraire;
use App\Models\Vehicule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{

    public function index()
    {
        $itineraires = Itineraire::with('vehicule', 'destination', 'conducteur')
        ->latest()
        ->paginate(10);
        return Inertia::render('Itineraires/Roads', [
            'itineraires' => $itineraires,
        ]);

    }

    public function create()
    {
        return Inertia::render('Itineraires/Create', [
            'itineraires' => Itineraire::all(),
            'vehicules' => Vehicule::all(),
            'destinations' => Destination::all(),
            'conducteurs' => Conducteur::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'vehicule' => 'required',
            'destination' => 'required',
            'driver' => 'required',
            'depart' => 'required',
            'arrivee' => 'required'
        ]);

        $itineraire = new Itineraire();
        $itineraire->id_vehicule = $request->vehicule;
        $itineraire->id_destination = $request->destination;
        $itineraire->id_conducteur = $request->driver;
        $itineraire->depart = $request->depart;
        $itineraire->arrivee = $request->arrivee;

        $itineraire->save();

        return redirect()->route('itineraires');
    }

    public function edit(int $id)
    {

        return Inertia::render('Itineraires/Edit', [
            'itineraire' => Itineraire::find($id),
            'vehicules' => Vehicule::all(),
            'destinations' => Destination::all(),
            'conducteurs' => Conducteur::all()
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'vehicule' => 'required',
            'destination' => 'required',
            'driver' => 'required',
            'depart' => 'required',
            'arrivee' => 'required'
        ]);

        $itineraire = Itineraire::find($request->id);
        $itineraire->id_vehicule = $request->vehicule;
        $itineraire->id_destination = $request->destination;
        $itineraire->id_conducteur = $request->driver;
        $itineraire->depart = $request->depart;
        $itineraire->arrivee = $request->arrivee;

        $itineraire->save();

        return redirect()->route('itineraires');
    }

    public function destroy(int $id)
    {
        $itineraire = Itineraire::find($id);
        $itineraire->delete();
        return redirect()->route('itineraires');
    }
}
