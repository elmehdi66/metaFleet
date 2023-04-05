import Sidebar from "@/Components/Sidebar";
import React from "react";
import Dashboard from "../Dashboard";
import Activities from "@/Components/Activities";

function Roads({  itineraires }) {
    console.log(itineraires);
    return (
        <Dashboard>

            {itineraires.map((item , key)=>{
               return <div key={key}>
                    the date is : {item.depart}
                </div>
            } )}


        </Dashboard>
    );
}

export default Roads;
