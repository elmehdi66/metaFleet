import Activities from "@/Components/Activities";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Layout from "@/Layout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import axios from 'axios';

export default function Dashboard({ children }) {
    const { auth } = usePage().props

    return (
        <Layout>
            <Head title="Dashboard" />
            <Activities />
        </Layout>
    );
}
