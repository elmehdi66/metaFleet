import Dashboard from '@/Pages/Dashboard'
import React from 'react'

function Activities() {
    return (

        <div className="col-lg-10 col-md-12">
            <div className="card widget">
                <div className="card-header">
                    <h1 className="">Activity Overview</h1>
                </div>
                <div className="row g-4 mt-3">
                    <div className="col-md-6">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <div className="display-5">
                                    <i className="bi bi-truck text-secondary"></i>
                                </div>
                                <h5 className="my-3">Véhicules disponibles</h5>
                                <div className="text-muted">15 New Packages</div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <div className="display-5">
                                    <i className="bi bi-receipt text-warning"></i>
                                </div>
                                <h5 className="my-3">Ordered</h5>
                                <div className="text-muted">72 New Items</div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <div className="display-5">
                                    <i className="bi bi-bar-chart text-info"></i>
                                </div>
                                <h5 className="my-3">Reported</h5>
                                <div className="text-muted">50 Support New Cases</div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <div className="display-5">
                                    <i className="bi bi-cursor text-success"></i>
                                </div>
                                <h5 className="my-3">Arrived</h5>
                                <div className="text-muted">34 Upgraded Boxed</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Activities
