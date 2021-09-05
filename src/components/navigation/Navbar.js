import React from 'react'
import './Navbar.css'
import NavButton from './navButtons/NavButton'
import { GoHome } from 'react-icons/go'
import { CgProfile } from 'react-icons/cg'
import { FaSuitcase } from 'react-icons/fa'
const Navbar = () => {
    return (

        <div className='navigationBar'>
            <NavButton text='Home' icon={<GoHome/>}></NavButton>
            <NavButton text='Profile' icon={<CgProfile/>}></NavButton>
            <NavButton text = 'Projects' icon={<FaSuitcase/>}></NavButton>
        </div>

    )
}
export default Navbar
