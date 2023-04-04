import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head , usePage} from "@inertiajs/react";

export default function Dashboard({children }) {
    const {auth} = usePage().props
    return (
        <>
            <div className="bg-white">
            Navbar {auth.user.name}
            </div>
             <Head title="Dashboard" />

            <div className="row">
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
