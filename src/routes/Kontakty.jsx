import React from 'react'
import CustomBreadcrumb from '../Components/CustomBreadcrumb'
import { useBreadcrumbItems } from '../hooks/generateBreadcrumbItems';

export default function Kontakty() {

  const breadcrumbsItems = useBreadcrumbItems()

  return (
    <div>
      <CustomBreadcrumb items={breadcrumbsItems}/>
    </div>
  )
}
