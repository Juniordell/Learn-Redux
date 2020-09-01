import React, { useState } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../Sidebar'
import './styles.css'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

const Main = ({ add, dispatch }) => {
  const [number, setNumber] = useState(0)

  function addAction(module, lesson) {
    return {
      type: 'ADD',
      payload: number,
    }
  }

  function takeAction(module, lesson) {
    return {
      type: 'TAKE',
      payload: number,
    }
  }

  return (
    <div className='container'>
      <div className='content'>
        <input
          type='number'
          placeholder='number'
          onChange={(e) => setNumber(e.target.value)}
        />
        <h1>{add.value}</h1>
        <div>
          <motion.button
            variants={buttonVariants}
            whileHover='hover'
            className='fun-btn'
            onClick={() => dispatch(addAction(add, addAction))}
          >
            Add
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover='hover'
            className='fun-btn'
            onClick={() => dispatch(takeAction(add, takeAction))}
          >
            Take
          </motion.button>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default connect((state) => ({
  add: state.add,
}))(Main)
