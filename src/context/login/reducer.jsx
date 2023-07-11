export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    //   console.log('Called')
      return { ...state, User: action.payload }

    case 'LOGOUT':
      return { ...state, User: null }

    default:
      return state
  }
}
