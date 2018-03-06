// Redux
import { combineReducers } from 'redux'

// Redux-form
import { reducer as formReducer } from 'redux-form'

import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboard-reducer'
import tabsReducer from '../common/tabs/tab-reducer'
import billingCycleReducer from '../billing-cycle/billing-cycle-reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tabs: tabsReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer
