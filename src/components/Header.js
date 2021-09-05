import React from 'react'

const Header = ({name}) => {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

Header.defaultProps = {
    name: 'Josephus Mabanag',
}

export default Header
