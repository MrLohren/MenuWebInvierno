import React from 'react'
import colorImage from '../images/tasks/color.png'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        return (
           <div className="card-container mx-auto col-sm-3">
               <div>
                   <img src={colorImage} alt="Fondo de mientras"/>
               </div>
               <div className='card-text col-sm-8'>
                   <h1>Color Gen</h1>
               </div>
           </div>        
        )
    }
}

export default Card