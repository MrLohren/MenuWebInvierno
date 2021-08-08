import React from 'react'
import './styles/Card.css'

class TaskCard extends React.Component {
    render() {
        const { image, taskname, alt } = this.props
        return (
            <button className="card-container mx-auto col-sm-3">
                <img src={image} alt={alt} />
                <h1 className='card-text col-sm'>{taskname}</h1>
            </button>
        )
    }
}

export default TaskCard