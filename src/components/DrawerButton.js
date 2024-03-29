import React from 'react'
import './styles/DrawerButton.css'

class DrawerButton extends React.Component {
    render() {
        const {click} = this.props;
        return (
            <button className='toggle-button' onClick={click}>
                <div className='toggle-button__line'/>
                <div className='toggle-button__line'/>
                <div className='toggle-button__line'/>
            </button>
        )
    }
}

export default DrawerButton