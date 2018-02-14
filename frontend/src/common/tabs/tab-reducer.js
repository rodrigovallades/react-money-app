const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload }
    case 'TABS_SHOWHIDE':
      return { ...state, visible: action.payload }
    default:
      return state
  }
}
