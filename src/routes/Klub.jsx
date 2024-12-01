import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomBreadcrumb from '../Components/CustomBreadcrumb';
import { useBreadcrumbItems } from '../hooks/generateBreadcrumbItems';
import { Card, CardContent } from '../Components/ui/card';

export default function Klub() {
  const location = useLocation();
  const isRootPath = location.pathname === '/klub';
  const breadcrumbItems = useBreadcrumbItems();

  return (
    <div className='text-black'>
      {isRootPath && (
        <>
          <CustomBreadcrumb items={breadcrumbItems} />
          <Card className='p-4'>
            <CardContent className='p-0'>
              <div>


                <h3 className='font-semibold'>Adresa zimní stadion :</h3>

                <p className='mb-3'>
                  Ringhofferova 336 <br />
                  251 69 Velké Popovice <br />
                  <a
                    href='http://www.mapy.cz/#x=133564597@y=135373994@z=16@mm=ZP@sa=s@st=s@ssq=Ringhofferova%20336@sss=1@ssp=133558192_135369440_133573072_135382640'
                    className='hover:underline font-semibold'
                  >
                    ukázat na mapě
                  </a>
                </p>

                <p>
                <span className='font-semibold'>Telefon :</span>	<a href="tel:+420 603 897 510">+420 603 897 510</a><br />
                <span className='font-semibold'>Fax :</span>	<a href="tel:++420 323 665 324">+420 323 665 324</a> <br />
                <span className='font-semibold'>Email :</span>	<a href="mailto:tj-slavoj@email.cz">tj-slavoj@email.cz</a>

                </p>


              </div>
              <div>
                
              </div>
            </CardContent>
          </Card>
        </>
      )}
      <Outlet />
    </div>
  );
}
