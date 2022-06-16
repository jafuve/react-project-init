import React from 'react'

import { Routes, Route } from 'react-router-dom';

import { Nabvar } from '../components/Nabvar'
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import useBodyClass from '../hooks/useBodyClass';
import { DashboardView } from '../views/DashboardView';
import { UsersView } from '../views/UsersView';
import * as $ from 'jquery';
import * as AdminLte from 'admin-lte';

export const AdminRouter = () => {

    useBodyClass([`hold-transition`, `sidebar-mini`]);

    React.useEffect(() => {

        AdminLte.Layout._jQueryInterface.call($('body'));
        AdminLte.PushMenu._jQueryInterface.call($('[data-widget="pushmenu"]'));
        AdminLte.Treeview._jQueryInterface.call($('[data-widget="treeview"]'), 'init');

    }, []);

    return (
        <>
            <div className="wrapper">

                <Nabvar />
                <Sidebar />

                <div>

                    <Routes>
                        <Route path="/" element={<DashboardView />} />
                        <Route path="/users" element={<UsersView />} />
                        <Route path="*" element={<h2>NOT FOUND 404</h2>} />
                    </Routes>

                </div>

                <Footer />

            </div>
        </>
    )
}
