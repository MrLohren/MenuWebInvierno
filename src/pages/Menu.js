import React from 'react'
import TaskCard from '../components/TaskCard'
import Greetings from '../components/Greetings'
import Header from '../components/Header'
import colorImage from '../images/tasks/color.png'
import pianoDoggo from '../images/tasks/piano_doggo.jpg'
import TBD from '../images/tasks/doggo_tbd2.jpg'
import '../components/styles/Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='menu-container'>
                <div className='header-container'>
                    <Header />
                </div>
                <div className='greeting-container'>
                    <Greetings 
                    name = 'Lohren' />
                </div>
                <div className='task-container'>
                    <div className='tasks row'>
                        <TaskCard
                            image={colorImage}
                            alt='Color Generator'
                            taskname='Color Generator' />
                        <TaskCard
                            image={pianoDoggo}
                            alt='Online Piano'
                            taskname='Online Piano' />
                        <TaskCard
                            image={TBD}
                            alt='TBD'
                            taskname='TBD' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu