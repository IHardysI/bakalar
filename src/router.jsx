// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

// Import all your route components
import ErrorPage from './routes/error-page.jsx';
import Uvod from './routes/Uvod.jsx';
import Klub from './routes/Klub.jsx';
import ZakladniInformace from './routes/ZakladniInformace.jsx';
import Kontakty from './routes/Kontakty.jsx';
import Partnery from './routes/Partnery.jsx';
import ZimniStadion from './routes/ZimniStadion.jsx';
import Atym from './routes/Atym.jsx';
import Soupiska from './routes/Soupiska.jsx';
import Statistika from './routes/Statistika.jsx';
import RealizacniTym from './routes/RealizacniTym.jsx';
import Zapasy from './routes/Zapasy.jsx';
import Tabulka from './routes/Tabulka.jsx';
import Info from './routes/Info.jsx';
import Mladez from './routes/Mladez.jsx';
import Skolicky from './routes/Skolicky.jsx';
import RozpisLedu from './routes/RozpisLedu.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Uvod />,
      },
      {
        path: 'klub',
        element: <Klub />,
        children: [
          {
            path: 'zakladni-informace',
            element: <ZakladniInformace />,
          },
          {
            path: 'kontakty',
            element: <Kontakty />,
          },
          {
            path: 'partneri',
            element: <Partnery />,
          },
          {
            path: 'zimni-stadion',
            element: <ZimniStadion />,
          },
        ],
      },
      {
        path: 'atym',
        element: <Atym />,
        children: [
          {
            path: 'soupiska',
            element: <Soupiska />,
          },
          {
            path: 'statistika',
            element: <Statistika />,
          },
          {
            path: 'realizacni-tym',
            element: <RealizacniTym />,
          },
          {
            path: 'zapasy',
            element: <Zapasy />,
          },
          {
            path: 'tabulka',
            element: <Tabulka />,
          },
          {
            path: 'info',
            element: <Info />,
          },
        ],
      },
      {
        path: 'mladez',
        element: <Mladez />,
        // Add child routes if any
      },
      {
        path: 'skolicky',
        element: <Skolicky />,
      },
      {
        path: 'rozpis-ledu',
        element: <RozpisLedu />,
      },
      // Add other routes as needed
    ],
  },
]);

export default router;
