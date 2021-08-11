import React from 'react'
import './styles/Backdrop.css'

class Backdrop extends React.Component {
    render(){
        const {click} = this.props;
        return(
            <div className='backdrop-container'onClick={click}/>
        )
    }
}

export default Backdrop