import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './component/layout';
import React, { Suspense } from 'react';

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
          <Route path="*" element={<Loading><SamplePage /></Loading>} />
          {/* <Route path="*" element={<Loading><h1>Not Found</h1></Loading>} /> */}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
