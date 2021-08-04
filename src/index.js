import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<div className='row'>
    <Card />
    <Card />
    <Card />
</div>, container)