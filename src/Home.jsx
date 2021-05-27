import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/img3.png';
import Common from './Common';
export default function Home() {
    return (
        <>
           <Common  
           name="Grow your knowledge with "
           imgsrc={web}
           visit="/service"
           btnname="Get Service"
                            
          />
        </>
    )
}
