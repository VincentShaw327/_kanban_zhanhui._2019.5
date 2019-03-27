import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'


import tabListResult from './tabList'
import { AuthGroup, AuthCategory } from './auth'

const rootReducer = combineReducers( {
    routing,
    config: ( state = {} ) => state,
    tabListResult,

    AuthGroup,
    AuthCategory,
} );

export default rootReducer;
