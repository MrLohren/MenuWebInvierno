import React from 'react'
import './styles/SideDrawer.css'

class SideDrawer extends React.Component {
    render() {
        const { show } = this.props;
        let drawerClasses = 'sidedrawer-container';
        if (show) {
            drawerClasses = 'sidedrawer-container open';
        }
        return (
            <div className={drawerClasses}>
                <nav>
                    <h1>Tareas</h1>
                    <ul>
                        <li><a href='/'>Color Generator</a></li>
                        <li><a href='/'>Online Piano</a></li>
                        <li><p>TBD</p></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideDrawer