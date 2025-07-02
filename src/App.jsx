import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages
const SubmarineScene = lazy(() => import('./scenes/Submarine'));
const Home = lazy(() => import('./pages/Home'));
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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <SubmarineScene />
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SubmarineScene />
            <About />
          </Suspense>
        )
      },
      {
        path: 'team',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Team />
              </Suspense>
            )
          },
          {
            path: 'leadership',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <TeamLeadership />
              </Suspense>
            )
          },
          {
            path: 'departments',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <TeamDepartments />
              </Suspense>
            )
          },
          {
            path: 'advisors',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <TeamAdvisors />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'robosub',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Robosuf />
              </Suspense>
            )
          },
          {
            path: 'blog',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <RobosufBlog />
              </Suspense>
            )
          },
          {
            path: 'gallery',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <RobosufGallery />
              </Suspense>
            )
          },
          {
            path: 'media',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <RobosufMedia />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'auv',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AUV />
              </Suspense>
            )
          },
          {
            path: 'hydrojan-01',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HydroJan01 />
              </Suspense>
            )
          },
          {
            path: 'hydrojan-02',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HydroJan02 />
              </Suspense>
            )
          },
          {
            path: 'hydrojan-03',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HydroJan03 />
              </Suspense>
            )
          },
          {
            path: 'hydrojan-10',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HydroJan10 />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'sponsor',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Sponsor />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    )
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
