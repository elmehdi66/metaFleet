import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/react';
import Layout from "@/Layout";
import Swal from "sweetalert2";


function Roads({ itineraires }) {
    const [selectedOption, setSelectedOption] = useState("vehicule");
    const [selectedId, setSelectedId] = useState(null);

    const navigateToEdit = (id) => {
        Inertia.visit(route("itineraires.edit", { id: id }));
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
                Inertia.delete(route("itineraires.destroy", { id: id }));
                Swal.fire(
                    'Supprimé!',
                    'Itinéraire supprimé avec succès.',
                    'success'
                )
            }
        })

    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSelectedId(null); // Reset the selected driver/vehicle when changing the option
    };

    const handleSelectDriverOrVehicle = (id) => {
        setSelectedId(id);
    };

    const getUniqueDrivers = () => {
        const uniqueDrivers = new Map();
        itineraires.data.forEach((item) => {
            uniqueDrivers.set(item.conducteur.id, item.conducteur);
        });
        return Array.from(uniqueDrivers.values());
    };

    const getUniqueVehicles = () => {
        const uniqueVehicles = new Map();
        itineraires.data.forEach((item) => {
            uniqueVehicles.set(item.vehicule.id, item.vehicule);
        });
        return Array.from(uniqueVehicles.values());
    };

    const filteredItineraires = itineraires.data.filter((item) => {
        if (selectedOption === "vehicule" && selectedId) {
            return item.vehicule.id === selectedId;
        } else if (selectedOption === "conducteur" && selectedId) {
            return item.conducteur.id === selectedId;
        }
        return true;
    });

    return (
        <Layout>
                <div class="add">
                    <Link href={route('itineraires.create')} className="btn btn-secondary btn-lg ">Ajouter itineraire</Link>
                </div>
            <div className="custom">
                <label htmlFor="option">Choisir une option :</label>
                <select
                    id="option"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="vehicule">Véhicule</option>
                    <option value="conducteur">Conducteur</option>
                </select>
                {selectedOption === "vehicule" ? (
                    <select
                        onChange={(e) => handleSelectDriverOrVehicle(parseInt(e.target.value))}
                        value={selectedId || ""}
                    >
                        <option value="">Tous les véhicules</option>
                        {getUniqueVehicles().map((vehicle) => (
                            <option key={vehicle.id} value={vehicle.id}>
                                {`${vehicle.marque} ${vehicle.modele}`}
                            </option>
                        ))}
                    </select>
                ) : (
                    <select
                        onChange={(e) => handleSelectDriverOrVehicle(parseInt(e.target.value))}
                        value={selectedId || ""}
                    >
                        <option value="">Tous les conducteurs</option>
                        {getUniqueDrivers
                            ().map((driver) => (
                                <option key={driver.id} value={driver.id}>
                                    {driver.nom}
                                </option>
                            ))}
                    </select>
                )}

            </div>

            <table id="datatable-example" className="table text-center bg-white">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Véhicule</th>
                        <th>Matricule</th>
                        <th>Destination</th>
                        <th>Conducteur</th>
                        <th>Date de départ</th>
                        <th>Date d'arrivée</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItineraires.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.vehicule.marque} {item.vehicule.modele}</td>
                                <td>{item.vehicule.matricule}</td>
                                <td>{item.destination.nom_destination}</td>
                                <td>{item.conducteur.nom}</td>
                                <td>{item.depart}</td>
                                <td>{item.arrivee}</td>
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
            {itineraires.total > itineraires.per_page && (
                <nav className="text-center mx-4 pt-4 Page navigation example d-flex align-items-center justify-content-between">
                <div className="pagination-text">
                        Affichage de {((itineraires.current_page - 1) * itineraires.per_page) + 1} à {Math.min(itineraires.current_page * itineraires.per_page, itineraires.total)} sur {itineraires.total} entrées
                    </div>
                    <ul className="pagination">
                        <li className={`page-item ${itineraires.current_page === 1 ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href={route("itineraires", { page: itineraires.current_page - 1 })}
                                tabIndex="-1"
                                aria-disabled={itineraires.current_page === 1}
                            >
                                Previous
                            </Link>
                        </li>
                        {Array.from(Array(itineraires.last_page).keys()).map((page) => (
                            <li
                                key={page + 1}
                                className={`page-item ${itineraires.current_page === page + 1 ? "active" : ""
                                    } mx-1`}
                            >
                                <Link
                                    className="page-link"
                                    href={route("itineraires", { page: page + 1 })}
                                >
                                    {page + 1}
                                </Link>
                            </li>
                        ))}
                        <li className={`page-item ${itineraires.current_page === itineraires.last_page ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href={route("itineraires", { page: itineraires.current_page + 1 })}
                                aria-disabled={itineraires.current_page === itineraires.last_page}
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

export default Roads;
