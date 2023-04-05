import React from "react";
import Layout from "@/Layout";

function Roads({ itineraires }) {
    console.log(itineraires);
    return (
        <Layout>
            <table
                id="datatable-example"
                className="table text-center bg-white"
            >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Véhicule</th>
                        <th>Destination</th>
                        <th>Date de départ</th>
                        <th>Date d'arrivée</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itineraires.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.id_vehicule}</td>
                                <td>{item.id_destination}</td>
                                <td>{item.depart}</td>
                                <td>{item.arrivee}</td>
                                <td>
                                    <div className="input-group">
                                        <button className="btn btn-sm btn-outline-success mx-2">
                                            Modifier
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Supprimer
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}

                    {/* <tr>

                    </tr> */}
                </tbody>
            </table>
        </Layout>
    );
}

export default Roads;
