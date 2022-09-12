import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { IDialog } from './shared/components/dialog/IDialog';
import { FullLayout } from './shared/layouts/FullLayout';
import Loader from './shared/layouts/loader/Loader';

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>

      <FullLayout />
    </Suspense>
    </>
  );
}

export default App;
