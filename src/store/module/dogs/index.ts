import { dogsApi } from '../../../services/apis'

let randomDog: object
let allDogs: object
;(async () => {
  randomDog = await dogsApi.get('image/random')

  allDogs = await dogsApi.get('list/all')
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
