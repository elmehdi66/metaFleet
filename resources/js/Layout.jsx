import Activities from "@/Components/Activities";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";


export default function Layout({ children }) {
    return (
        <>

            <Head title="Dashboard" />

            <div className="row">
                <Header />
                <Sidebar />
                <div className="col-md-12 offset-md-3 ">
                    <div className="row">
                        <div className="col-md-9 mt-5 pt-5 mx-1 scroll ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
