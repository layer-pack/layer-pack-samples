import { LEFT_CHANGED } from './left-actions';

export function leftChanged( state = { left: false }, action) {
  switch (action.type) {
    case LEFT_CHANGED:
      return Object.assign({}, state, {
        left: !state.left,
      });
    default:
      return state
  }
}
