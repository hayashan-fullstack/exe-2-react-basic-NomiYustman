import React from 'react'
import ReactDOM from 'react-dom'
const Header= (props)=>{
  return <h1>{props.course}</h1>
}

const Content=(props)=>{
  return (
  <p>{props.a1}{props.a2}</p>
  )
}

const Total=(props)=>{
   
}

const App = () => {
  const course = 'my_app Nomi'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))