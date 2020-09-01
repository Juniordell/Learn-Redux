const INITIAL_STATE = {
  value: 0,
}

export default function add(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD':
      return { ...state, value: state.value + Number(action.payload) }
    case 'TAKE':
      return { ...state, value: state.value - action.payload }
    default:
      return state
  }
}
