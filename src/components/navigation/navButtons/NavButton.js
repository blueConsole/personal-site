import React from 'react'
import './NavButton.css'

const NavButton = (props) => {
    return (
        <div className='btnContainer'>
            <span>{props.text}</span>
            <button className="navBtn">
                {props.icon}
            </button>
        </div>
    )
}

export default NavButton
