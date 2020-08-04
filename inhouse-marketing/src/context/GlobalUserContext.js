import React from 'react'

const initialValue = {}

const reducer = (state, action) => {
  switch (action.type) {
      case "CREATE_USER" : {
          return {
              ...state,
              email: action.payload.email
          }
      }
  }
}
