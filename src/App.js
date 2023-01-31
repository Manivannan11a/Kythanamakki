import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './component/layout';
import React, { Suspense } from 'react';
import GalleryComp from './component/gallery';
import CabinComponent from './component/cabin';
import AdventuresComp from './component/adventures';
import ExperiencesComp from './component/experience';
import Booknow from './component/book';

const SamplePage = React.lazy(() => import('./component/sample-page'));

const Loading = ({ children }) => (
  <Suspense fallback={<h1>Loading</h1>}>
    {children}
  </Suspense>
)

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/cabin" element={<Loading><CabinComponent /></Loading>} />
          <Route path="/gallery" element={<Loading><GalleryComp /></Loading>} />
          <Route path="/adventures" element={<Loading><AdventuresComp /></Loading>} />
          <Route path="/experience" element={<Loading><ExperiencesComp /></Loading>} />
          <Route path="/home" element={<Loading><SamplePage /></Loading>} />
          <Route path="/" element={<Loading><SamplePage /></Loading>} />
          <Route path="/bookings" element={<Loading><Booknow/></Loading>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
