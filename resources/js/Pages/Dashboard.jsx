import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ children }) {
    const { auth } = usePage().props
    return (
        <>

            <Head title="Dashboard" />

            <div className="row">
                <Header />
                <Sidebar />

                <div className="col-md-12 offset-md-3">
                    <div className="row">
                        <div className="col-md-9">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
