import { RIGHT_CHANGED } from './right-actions';

export function rightChanged( state = { right: false }, action) {
  switch (action.type) {
    case RIGHT_CHANGED:
      return Object.assign({}, state, {
        right: !state.right,
      });
    default:
      return state
  }
}
