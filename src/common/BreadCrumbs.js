import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const BreadCrumbs = () => {
    const location = useLocation()
    let crumbLink = ''
    if (location.pathname === '/layout') {
        return null
    }

    const crumbPath=location.pathname.split('/')
                    .filter((path)=>path !=='')
                    .map((crumb)=>{
                      console.log('crumb',crumb)

                        crumbLink +=`/${crumb}`
                      console.log('crumbLink',crumbLink)

                        return <Link className='ml-2' to={crumbLink} key={crumb}>
                            {crumb}
                        </Link>
                    })
    console.log('crumbPath',crumbPath)
  return (
  
    <Breadcrumbs separator="›"  aria-label="breadcrumb">
        {crumbPath}

</Breadcrumbs>
   
  )
}
