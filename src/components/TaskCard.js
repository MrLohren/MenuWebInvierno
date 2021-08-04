import React from 'react'
import './styles/Card.css'

class TaskCard extends React.Component {
    render() {
        const { image, taskname, alt } = this.props
        return (
            <div className="card-container mx-auto col-3">
                <div>
                    <img src={image} alt={alt} />
                </div>
                <div className='card-text col-sm'>
                    <h1>{taskname}</h1>
                </div>
            </div>
        )
    }
}

export default TaskCard