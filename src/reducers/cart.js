export const cartInitialState = []

const actions = {
  add_to_cart: 'ADD_TO_CART',
  remove_from_cart: 'REMOVE_FROM_CART',
  clear_cart: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case actions.add_to_cart: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [...state, { ...actionPayload, quantity: 1 }]
    }

    case actions.remove_from_cart: {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }

    case actions.clear_cart: {
      return cartInitialState
    }
  }
}
