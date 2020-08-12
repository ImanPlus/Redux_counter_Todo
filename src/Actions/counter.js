export const INCREMENT = 'INCREMENT';
export const DECREASE = 'DECREASE';

export function increaseCount() {
  return ({type: INCREMENT})
}

export function decreaseCount() {
  return ({type: DECREASE})
}