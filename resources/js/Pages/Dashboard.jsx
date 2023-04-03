import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head , usePage} from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="row">
                <Sidebar />

                <div className="col-md-12 offset-md-3">

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
