
import React from "react";
import Layout from "@/Layout";

function Roads({  itineraires }) {
    console.log(itineraires);
    return (
        <Layout>

            {itineraires.map((item , key)=>{
               return <div key={key}>
                    the date is : {item.depart}
                </div>
            } )}
        </Layout>
    );
}

export default Roads;
