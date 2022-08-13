import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
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
      <Layout>
        <Routes>
          <Route path="/app" element={<Loading><SamplePage /></Loading>} />
          <Route path="*" element={<Loading><h1>Not Found</h1></Loading>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
