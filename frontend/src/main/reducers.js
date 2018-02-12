import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboard-reducer'
import tabsReducer from '../common/tabs/tab-reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabsReducer
})

export default rootReducer
