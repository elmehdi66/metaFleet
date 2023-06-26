import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/react';
import Layout from "@/Layout";
import Swal from "sweetalert2";


function Index({ vehicules }) {


    const navigateToEdit = (id) => {
        Inertia.visit(route("vehicule.edit", { id: id }));
    };

    const navigateToDelete = (id) => {

        Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: "Cette action est irréversible !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, j\'en suis sûr !'
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("vehicule.destroy", { id: id }));
                Swal.fire(
                    'Supprimé!',
                    'Véhicule supprimé avec succès.',
                    'success'
                )
            }
        })

    };


    return (
        <Layout>
            <div class="add">
                <Link href={route('vehicule.create')} className="btn btn-secondary btn-lg ">Ajouter véhicule</Link>
            </div>


            <table id="datatable-example" className="table text-center bg-white">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Matricule</th>
                        <th>Marque</th>
                        <th>Modele</th>
                        <th>Annee</th>
                        <th>Carburant</th>
                        <th>Date de MES</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(vehicules.data)}
                    {vehicules.data.map((item, key) => {
                        const number = key + 1;
                        return (
                            <tr key={key}>
                                <td>{number}</td>
                                <td>{item.matricule}</td>
                                <td>{item.marque}</td>
                                <td>{item.modele}</td>
                                <td>{item.annee}</td>
                                <td>{item.carburant}</td>
                                <td>{item.date_service}</td>
                                <td>{item.statut}</td>
                                <td>
                                    <div className="input-group">
                                        <button
                                            className="btn btn-sm btn-outline-success mx-2"
                                            onClick={(e) => navigateToEdit(item.id)}
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={(e) => navigateToDelete(item.id)}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {vehicules.total > vehicules.per_page && (
                <nav className="text-center mx-4 pt-4 Page navigation example d-flex align-items-center justify-content-between">
                    <div className="pagination-text">
                        Affichage de {((vehicules.current_page - 1) * vehicules.per_page) + 1} sur {vehicules.total} entrées
                    </div>
                    <ul className="pagination">
                        <li className={`page-item ${vehicules.current_page === 1 ? "disabled" : ""}`}>
                            <Link
                                className="page-link"

                                tabIndex="-1"
                                aria-disabled={vehicules.current_page === 1}
                            >
                                Previous
                            </Link>
                        </li>
                        {Array.from(Array(vehicules.last_page).keys()).map((page) => (
                            <li
                                key={page + 1}
                                className={`page-item ${vehicules.current_page === page + 1 ? "active" : ""
                                    } mx-1`}
                            >
                                <Link
                                    className="page-link"
                                    href={route("vehicule.index", { page: page + 1 })}
                                >
                                    {page + 1}
                                </Link>
                            </li>
                        ))}
                        <li className={`page-item ${vehicules.current_page === vehicules.last_page ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href={route("vehicule.index", { page: vehicules.current_page + 1 })}
                                aria-disabled={vehicules.current_page === vehicules.last_page}
                            >
                                Next
                            </Link>
                        </li>
                    </ul>

                </nav>


            )}

        </Layout>
    );
}

export default Index;
