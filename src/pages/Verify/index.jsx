import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

// import { Container } from './styles';

const Payment = ({ people }) => {
  return (
    <div className='people_container'>
      {people.map((person) => (
        <div key={person.id} className='card'>
          <h1>Olá {person.name}!</h1>
          <span>Com {person.age} já da pra beber hein!</span>
        </div>
      ))}
    </div>
  )
}

export default connect((state) => ({
  people: state.people.modules,
}))(Payment)
