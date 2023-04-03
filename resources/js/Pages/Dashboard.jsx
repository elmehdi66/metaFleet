import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Roads from "./itineraires/Roads";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="row">
                <Sidebar />

                <div className="col-md-12 offset-md-3">
                    <Roads/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
