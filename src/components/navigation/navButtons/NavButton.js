import React from 'react'
import './NavButton.css'

const btnClicked = (text)=>{
    alert('clicked ' + text)
}
const NavButton = (props) => {
    return (
        <div className='btnContainer'>
            <span className='btnLabel'>{props.text}</span>
            <button className="navBtn" onClick={()=>{btnClicked(props.text)}}>
                {props.icon}
            </button>
        </div>
    )
}

export default NavButton
