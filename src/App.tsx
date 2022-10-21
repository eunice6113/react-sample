import React, { Suspense } from 'react';
import { /* Router,*/ useRoutes, BrowserRouter as Router, } from 'react-router-dom';
import { Route, Routes } from "react-router";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// import "../node_modules/cloud-portal-design-token/src/styles.css"
// import "../node_modules/sample-design-token/src/styles.css"
import "./assets/css/token-rewrite.css";
import './assets/css/App.css';
import './assets/css/App_ksj.css';
import { ConfirmDialog, Toast } from 'primereact';
import adminRoutes from './app/routes/admin-routes';

function App() {
  const routes = useRoutes(adminRoutes)

  console.log('routes', routes)
  const routes2 = adminRoutes;

  return (
    <>
    <ConfirmDialog />
    <Toast />
    
    {/* <Suspense fallback={<Loader />}> */}
        {routes}
    {/* </Suspense> */}
{/* 
    <Router>
        <Routes>
          
        </Routes>
    </Router> */}

    </>
  );
}

export default App;
