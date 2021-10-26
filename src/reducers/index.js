import { combineReducers } from 'redux'
import modal from './modal'
import note from './note'
import ui from './ui'
export default combineReducers({
    modal,
    note,
    ui
})