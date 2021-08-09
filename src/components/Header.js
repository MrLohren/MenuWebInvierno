import React from 'react'
import './styles/Header.css'
import Logo from '../images/Logo/logo.png'
import DrawerButton from './DrawerButton'

class Header extends React.Component {
    render() {
        const {drawerClickHandler} = this.props;
        return (
            <header className='header-container mx-auto row'>
                <div className='col-1 nav-bar'>
                    <DrawerButton click = {drawerClickHandler}/>
                </div>
                <img src={Logo} className='col-11' />
            </header>
        )
    }
}

export default Header