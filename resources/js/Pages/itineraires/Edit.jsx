import Layout from '@/Layout'
import { useForm } from '@inertiajs/react'
import React from 'react'
import Swal from "sweetalert2";


function Edit({itineraire, vehicules, destinations, conducteurs }) {

    const { data, setData, processing, errors, post } = useForm({
        id : itineraire.id,
        vehicule: itineraire.id_vehicule,
        destination: itineraire.id_destination,
        driver: itineraire.id_conducteur,
        depart: itineraire.depart,
        arrivee: itineraire.arrivee,
    });


    const submit = e => {
        e.preventDefault()
        console.log(itineraire.id);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Itinéraire modifié avec succès',
            showConfirmButton: false,
            timer: 2500
          })
        post(route('itineraires.update'))

    }


    return (
        <Layout>

            <div className="container pt-5">
                <div className="row mt-4">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow rounded">
                            <div className="card-body">
                                <form  onSubmit={submit}>
                                    <div className="form-group">
                                        <label for="vehicule">Véhicule</label>
                                        <select name='vehicule' value={data.vehicule} onChange={e => setData('vehicule', e.target.value)} id="" className="form-select">
                                        <option>Choix vehicule</option>
                                            {vehicules?.map((item, key) => {
                                                return <option key={key} value={item.id}>{item.marque} - {item.modele}</option>
                                            })}
                                        </select>
                                        {errors.vehicule && <div className='text-danger'>{errors.vehicule[0]}</div>}

                                    </div>
                                    <div className="form-group">
                                        <label for="destination">Destination</label>

                                        <select name='destination' value={data.destination} onChange={e => setData('destination', e.target.value)} id="" className="form-select">
                                        <option>Choix destination</option>
                                            {destinations.map((item, key) => {
                                                return <option key={key} value={item.id}>{item.nom_destination}</option>
                                            })}
                                        </select>
                                        {errors.destination && <div className='text-danger'>{errors.destination[0]}</div>}

                                    </div>


                                    <div className="form-group">
                                        <label for="driver">Conducteur</label>

                                        <select name='driver' value={data.driver} onChange={e => setData('driver', e.target.value)} id="" className="form-select">
                                        <option>Choix conducteur</option>
                                            {conducteurs.map((item, key) => {
                                                return <option key={key} value={item.id}>{item.nom}</option>
                                            })}
                                        </select>
                                        {errors.driver && <div className='text-danger'>{errors.driver[0]}</div>}

                                    </div>

                                    <div className="form-group">
                                        <label for="depart">Depart</label>

                                        <input className='input-group' name='depart' type='datetime-local' value={data.depart} onChange={e => setData('depart', e.target.value)} />

                                        {errors.depart && <div className='text-danger'>{errors.depart[0]}</div>}

                                    </div>
                                    <div className="form-group">
                                        <label for="arrivee">Arrivée</label>

                                        <input className='input-group' name='arrivee' type='datetime-local' value={data.arrivee} onChange={e => setData('arrivee', e.target.value)} />

                                        {errors.arrivee && <div className='text-danger'>{errors.arrivee[0]}</div>}

                                    </div>
                                    <div className="form-group mt-4">
                                        <button type="submit" disabled={processing} className="btn btn-dark w-100">Sauvegarder</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </Layout>

    )
}

export default Edit
