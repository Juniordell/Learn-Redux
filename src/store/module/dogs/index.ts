import api from '../../../api'

let randomDog: object
let allDogs: object
;(async () => {
  randomDog = await api.get('image/random')

  allDogs = await api.get('list/all')
})()

const dogs = () => {
  return {
    modules: {
      random: randomDog,
      all: allDogs,
    },
  }
}

export default dogs
