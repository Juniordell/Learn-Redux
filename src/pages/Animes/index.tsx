import React, { useEffect, useState } from 'react'

import './styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { useFetch } from '../../hooks/useFetch'

const listOfIds: any = []

const Animes: React.FC = () => {
  const { data } = useFetch('animes')
  const [id, setId] = useState(listOfIds[~~(Math.random() * listOfIds.length)])

  useEffect(() => {
    data?.data.map((anime: any) => {
      listOfIds.push(anime.id)
    })

    setId(listOfIds[~~(Math.random() * listOfIds.length)])
  }, [data])

  function changeAnime() {
    setId(listOfIds[~~(Math.random() * listOfIds.length)])
  }

  return (
    <div className='animes_container'>
      <h1>What Anime should i watch?</h1>

      {data?.data.map(
        (anime: any) =>
          anime.id === id && (
            <div className='animes_content'>
              <h1>{anime.name}</h1>
              <img key={anime.id} src={anime.image} alt='sad' />
              <button onClick={changeAnime}>Random</button>
            </div>
          ),
      )}
    </div>
  )
}

export default Animes
