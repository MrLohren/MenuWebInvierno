import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Lohren',
  lastName : 'Hanover',
  avatar : 'https://avatarfiles.alphacoders.com/173/thumb-1920-173873.jpg'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Wena, {getName(user)}</h1>
  }
  return <h1>Quien eres?</h1>
}

const element = (
  <div>
  <h1>{getGreeting(user)}</h1>
  <img src={user.avatar}/>
  </div>)
const container = document.getElementById('root')

ReactDOM.render(element, container)