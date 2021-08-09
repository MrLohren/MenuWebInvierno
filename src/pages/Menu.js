import React from 'react'
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/Backdrop'
import TaskCard from '../components/TaskCard'
import Greetings from '../components/Greetings'
import Header from '../components/Header'
import colorImage from '../images/tasks/color.png'
import pianoDoggo from '../images/tasks/piano_doggo.jpg'
import TBD from '../images/tasks/doggo_tbd2.jpg'
import '../components/styles/Menu.css'

class Menu extends React.Component {
    state = {
        SideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { SideDrawerOpen: !prevState.SideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({SideDrawerOpen: false});
    }

    render() {
        let backDrop;

        if (this.state.SideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div className='menu-container'>
                <div className='header-container'>
                    <Header drawerClickHandler={this.drawerToggleClickHandler} />
                </div>
                <SideDrawer show={this.state.SideDrawerOpen}/>
                {backDrop}
                <div className='greeting-container'>
                    <Greetings
                        name='Lohren' />
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