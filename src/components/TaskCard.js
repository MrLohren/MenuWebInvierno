import React from 'react'
import './styles/Card.css'

class TaskCard extends React.Component{
    render(){
        const {image, taskname} = this.props
        return (
           <div className="card-container mx-auto col-sm-3">
               <div>
                   <img src={image} alt="Fondo de mientras"/>
               </div>
               <div className='card-text col-sm'>
                   <h1>{taskname}</h1>
               </div>
           </div>        
        )
    }
}

export default TaskCard