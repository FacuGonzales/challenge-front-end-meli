import React from 'react'
import { Breadcrumb } from 'components/Breadcrumb';

export const DetailsWraper = ({children, breadcrumbs}) => {
    return (
        <>  
            {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs}/>}
            {children}
        </>
    )
}
