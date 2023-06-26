<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehiculeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicules = Vehicule::latest()->paginate(5);
        return Inertia::render('Vehicules/Index',[
            'vehicules' => $vehicules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vehicules = Vehicule::all();
        return Inertia::render('Vehicules/Create',[
            'vehicules' => $vehicules
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'marque' => 'required',
            'modele' => 'required',
            'matricule' => 'required',
            'annee' => 'required',
            'carburant' => 'required',
            'date_service' => 'required',
            'statut' => 'required',
        ]);

        $vehicule = new Vehicule();
        $vehicule->marque = $request->marque;
        $vehicule->modele = $request->modele;
        $vehicule->matricule = $request->matricule;
        $vehicule->annee = $request->annee;
        $vehicule->carburant = $request->carburant;
        $vehicule->date_service = $request->date_service;
        $vehicule->statut = $request->statut;

        $vehicule->save();

        return redirect()->route('vehicule.index');
    }



    public function edit(int $id)
    {
        return Inertia::render('Vehicules/Edit',[
            'vehicule' => Vehicule::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'marque' => 'required',
            'modele' => 'required',
            'matricule' => 'required',
            'annee' => 'required',
            'carburant' => 'required',
            'date_service' => 'required',
            'statut' => 'required',
        ]);

        $newVehicule = Vehicule::find($id);
        $newVehicule->marque = $request->marque;
        $newVehicule->modele = $request->modele;
        $newVehicule->matricule = $request->matricule;
        $newVehicule->annee = $request->annee;
        $newVehicule->carburant = $request->carburant;
        $newVehicule->date_service = $request->date_service;
        $newVehicule->statut = $request->statut;

        $newVehicule->save();

        return redirect()->route('vehicule.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $vehicule = Vehicule::find($id);
        $vehicule->delete();
        return redirect()->back();
    }
}
