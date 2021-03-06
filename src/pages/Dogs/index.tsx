import React, { useEffect, useState } from 'react'

import { dogsApi } from '../../services/apis'

import Lottie from 'react-lottie'

import doguinho from '../../assets/doguinho.json'

// import Loader from 'react-loader-spinner'

import './styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Dogs: React.FC = () => {
  const [randomDog, setRandomDog]: any = useState({})
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    ;(async () => {
      const dogList = await dogsApi.get('/image/random')
      console.log(dogList)

      setLoading(1)
      setRandomDog(dogList)
    })()
  }, [])

  async function handleRandom() {
    setLoading(0)

    setRandomDog(await dogsApi.get('/image/random'))

    setLoading(1)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: doguinho,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className='dogs_container'>
      <h1>What dog should i choose?</h1>
      <div className='dogs_content'>
        {randomDog.data && loading === 1 ? (
          <img src={randomDog.data.message} alt='' />
        ) : (
          <div style={{ paddingBottom: 40 }}>
            <Lottie options={defaultOptions} height={150} width={300} />
          </div>
          // <Loader
          //   type='Puff'
          //   color='#00BFFF'
          //   height={100}
          //   width={100}
          //   timeout={3000}
          // />
        )}

        <button onClick={handleRandom}>Random</button>
      </div>
    </div>
  )
}

export default Dogs
