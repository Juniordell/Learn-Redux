import React, { useEffect, useState } from 'react'

import api from '../../api'

import Loader from 'react-loader-spinner'

import './styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Dogs: React.FC = () => {
  const [randomDog, setRandomDog]: any = useState({})
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    ;(async () => {
      const dogList = await api.get('/image/random')
      setLoading(1)
      setRandomDog(dogList)
    })()
  }, [])

  async function handleRandom() {
    setLoading(0)
    setRandomDog(await api.get('/image/random'))
    setLoading(1)
  }

  return (
    <div className='dogs_container'>
      <h1 style={{ position: 'fixed', top: 170 }}>What dog should i choose?</h1>
      {randomDog.data && loading === 1 ? (
        <img src={randomDog.data.message} alt='' />
      ) : (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      )}

      <button onClick={handleRandom}>Random</button>
    </div>
  )
}

export default Dogs
