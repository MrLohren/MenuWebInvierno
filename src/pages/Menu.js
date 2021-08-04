import React from 'react'
import TaskCard from '../components/TaskCard'
import colorImage from '../images/tasks/color.png'
import TBD from '../images/tasks/doggo_tbd2.jpg'
import '../components/styles/Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='row'>
                <TaskCard 
                image={colorImage}
                taskname='Color Generator'/>
                <TaskCard 
                image={TBD}
                taskname='TBD' />
                <TaskCard 
                image={TBD}
                taskname='TBD' />
            </div>
        )
    }
}

export default Menu