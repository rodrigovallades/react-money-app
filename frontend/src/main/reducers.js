import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboard-reducer'
import tabsReducer from '../common/tabs/tab-reducer'
import billingCycleReducer from '../billing-cycle/billing-cycle-reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabsReducer,
  billingCycle: billingCycleReducer
})

export default rootReducer
