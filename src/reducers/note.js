export default function note(state = { }, action) {
    switch (action.type) {
      case 'SET_SELECTED_NOTE' :{
        return {
          ...state,
          selectedNote:action.payload
        }
      }

      case 'CONF_FRECUENCY_NOTIFICATIONS' :{
        return {
          ...state,
          frecuencyNotifications:action.payload
        }
      }
      default:
        return state
    }
  }