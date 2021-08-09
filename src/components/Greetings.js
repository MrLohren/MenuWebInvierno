import React from 'react'
import './styles/Greetings.css'

class Greetings extends React.Component {
    render() {
        const { name } = this.props
        return (
            <div className='greetings-container'>
                <h1>Hola, {name}</h1>
                <p>¿Qué planeas hacer hoy?</p>
            </div>
        )
    }
}

export default Greetings