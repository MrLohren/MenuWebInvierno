import React from 'react'
import './styles/Header.css'
import Logo from '../images/Logo/logo.png'

class Header extends React.Component {
    render() {
        return (
            <header className='header-container mx-auto row'>
                <div className='nav-bar col-3'>
                    <button>x</button>
                </div>
                <img src={Logo} className='col-6' />
            </header>
        )
    }
}

export default Header