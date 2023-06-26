import Layout from '@/Layout'
import { useForm } from '@inertiajs/react'
import React from 'react'
import Swal from "sweetalert2";

function Create({ vehicules }) {



    const { data, setData, processing, errors, post } = useForm({
        marque: "",
        modele: "",
        matricule: "",
        annee: "",
        carburant: "",
        date_service: "",
        statut: ""
    });

    const submit = e => {
        e.preventDefault()
        console.log(errors);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Le véhicule a été ajouté avec succès',
            showConfirmButton: true,
            timer: 3500
        })
        post(route('vehicule.store'))

    }


    return (
        <Layout>

            <div className="container pt-5">
                {/* <h1>Welcome {userType}</h1> */}
                <div className="row mt-4">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow rounded">
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="form-group">

                                        <label for="marque">Marque</label>
                                        <input type='text' name='marque' value={data.marque} onChange={e => setData('marque', e.target.value)} className='form-control' />
                                        {errors.marque && <div className='text-danger'>{errors.marque[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="modele">Modèle</label>
                                        <input type='text' name='modele' value={data.modele} onChange={e => setData('modele', e.target.value)} className='form-control' />
                                        {errors.modele && <div className='text-danger'>{errors.modele[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="matricule">Matricule</label>
                                        <input type='text' name='matricule' value={data.matricule} onChange={e => setData('matricule', e.target.value)} className='form-control' />
                                        {errors.matricule && <div className='text-danger'>{errors.matricule[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="annee">Annee</label>
                                        <input type='date' name='annee' value={data.annee} onChange={e => setData('annee', e.target.value)} className='form-control' />
                                        {errors.annee && <div className='text-danger'>{errors.annee[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="carburant">Carburant</label>
                                        <input type='text' name='carburant' value={data.carburant} onChange={e => setData('carburant', e.target.value)} className='form-control' />
                                        {errors.carburant && <div className='text-danger'>{errors.carburant[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="date_service">Date de mise en service</label>
                                        <input type='datetime-local' name='date_service' value={data.date_service} onChange={e => setData('date_service', e.target.value)} className='form-control' />
                                        {errors.date_service && <div className='text-danger'>{errors.date_service[0]}</div>}

                                    </div>
                                    <div className="form-group">

                                        <label for="statut">Statut</label>
                                        <input type='text' name='statut' value={data.statut} onChange={e => setData('statut', e.target.value)} className='form-control' />
                                        {errors.statut && <div className='text-danger'>{errors.statut[0]}</div>}

                                    </div>
                                    <div className="form-group mt-4">
                                        <button type="submit" disabled={processing} class="btn btn-dark w-100">Sauvegarder</button>
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

export default Create
