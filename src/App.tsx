import React, { Suspense } from 'react';
import Loader from './app/shared/layouts/loader/Loader';
import { useRoutes } from 'react-router-dom';
import portalRoutes from './app/routes/portal-routes';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// import "../node_modules/cloud-portal-design-token/src/styles.css"
import "../node_modules/sample-design-token/src/styles.css"
import './assets/css/App.css';

function App() {
  const routing = useRoutes(portalRoutes)

  window.document.body.classList.add('theme-dark')
  
  return (
    <>
    <Suspense fallback={<Loader />}>
        {routing}
    </Suspense>
    </>
  );
}

export default App;
