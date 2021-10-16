export default function modal(state = {showModalDelete:false}, action) {
    switch (action.type) {
      case 'SHOW_MODAL_DELETE' :{
        return {
          ...state,
          showModalDelete:action.payload
        }
      }
      default:
        return state
    }
  }