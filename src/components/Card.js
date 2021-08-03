import React from 'react'
import colorImage from '../images/tasks/color.png'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        return (
           <div>
               <div>
                   <img src={colorImage} alt="Fondo de mientras"/>
               </div>
               <div>
                   <h1>Color Gen</h1>
               </div>
           </div> 
        )
    }
}

export default Card