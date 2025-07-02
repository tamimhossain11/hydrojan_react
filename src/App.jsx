import React, { useState, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import HeroIntro from './components/HeroIntro';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const TeamLeadership = lazy(() => import('./pages/TeamLeadership'));
const TeamDepartments = lazy(() => import('./pages/TeamDepartments'));
const TeamAdvisors = lazy(() => import('./pages/TeamAdvisors'));
const Robosuf = lazy(() => import('./pages/Robosuf'));
const RobosufBlog = lazy(() => import('./pages/RobosufBlog'));
const RobosufGallery = lazy(() => import('./pages/RobosufGallery'));
const RobosufMedia = lazy(() => import('./pages/RobosufMedia'));
const AUV = lazy(() => import('./pages/AUV'));
const HydroJan01 = lazy(() => import('./pages/HydroJan01'));
const HydroJan02 = lazy(() => import('./pages/HydroJan02'));
const HydroJan03 = lazy(() => import('./pages/HydroJan03'));
const HydroJan10 = lazy(() => import('./pages/HydroJan10'));
const Sponsor = lazy(() => import('./pages/Sponsor'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound')); // Optional

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const router = createBrowserRouter([
    // ---- HOME PAGE: No layout ----
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          {!introComplete && <HeroIntro onComplete={() => setIntroComplete(true)} />}
          {introComplete && <Home />}
        </Suspense>
      ),
    },
    // ---- ALL OTHER ROUTES: With MainLayout ----
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        { path: 'about', element: <About /> },
        {
          path: 'team',
          children: [
            { index: true, element: <Team /> },
            { path: 'leadership', element: <TeamLeadership /> },
            { path: 'departments', element: <TeamDepartments /> },
            { path: 'advisors', element: <TeamAdvisors /> },
          ],
        },
        {
          path: 'robosub',
          children: [
            { index: true, element: <Robosuf /> },
            { path: 'blog', element: <RobosufBlog /> },
            { path: 'gallery', element: <RobosufGallery /> },
            { path: 'media', element: <RobosufMedia /> },
          ],
        },
        {
          path: 'auv',
          children: [
            { index: true, element: <AUV /> },
            { path: 'hydrojan-01', element: <HydroJan01 /> },
            { path: 'hydrojan-02', element: <HydroJan02 /> },
            { path: 'hydrojan-03', element: <HydroJan03 /> },
            { path: 'hydrojan-10', element: <HydroJan10 /> },
          ],
        },
        { path: 'sponsor', element: <Sponsor /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> } // 404 fallback
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
