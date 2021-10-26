export default function ui(state = { error: '', success:'' }, action) {
    switch (action.type) {
      case 'SET_ERROR' :{
        return {
          ...state,
          error:action.payload
        }
      }
      case 'SET_SUCCESS' :{
        return {
          ...state,
          success:action.payload
        }
      }

      case 'CLEAN_MESSAGES' :{
        return {
          ...state,
          success:'',
          error:''
        }
      }
      default:
        return state
    }
  }