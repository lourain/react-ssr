import * as ActionTypes from './actionTypes'

export const directory = (state=null, action) => {
    switch (action.type) {
        case ActionTypes.GETDIRECTORY:
            return action.data
        default:
            return 'no match type!!'
    }
}
export const count = (state = 9, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  export const hello = (state = 'hello', action) => {
    switch (action.type) {
      default:
        return state;
    }
  };