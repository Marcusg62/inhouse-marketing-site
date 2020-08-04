import React, {useReducer, createContext} from 'react'

export const UserStateContext = createContext()
export const UserDispatchContext = createContext()

const initialState = {}

const reducer = (state, action) => {
  switch (action.type) {
      case "CREATE_USER" : {
          return {
              ...state,
              email: action.payload.email,
              restaurant: action.payload.restaurant
          }
      }
      case "REMOVE_USER" : {
          return {}
      }
  }
}

const GlobalUserContext = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}


export default GlobalUserContext

