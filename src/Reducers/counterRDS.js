import {INCREMENT, DECREMENT} from '../Actions/counter'

const intialState = {
  count: 0,
}
const handleChange = (state, change) => {
  const {count} = state;
  return ({
    count: count + change,
  })
}

export default function counterRDS(state = intialState, action) {
  // const {count} = state;
  switch (action.type) {
    case INCREMENT:
      return handleChange(state, 1)
    case DECREMENT:
      return handleChange(state, -1)
    default:
      return state
  }
}

