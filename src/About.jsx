import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/img1.jpg';
import Common from './Common';
export default function About() {
    return (
        <>
           <Common 
            name="Welcome to About Page "
           imgsrc={web}
           visit="/contact"
           btnname="Contact Now"
           />
        </>
    );
};
