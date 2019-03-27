import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configure from './redux/store';
// import Route from './route';
import Kanban from './app/pages/Kanban/kanban';
// import {getMenuData} from './common/menus'
// import './index.css';

// const store = configure( { config: global.gconfig } );
// let menuData=getMenuData()
// console.log('menus data',menuData)
// const store = configure( { menus:menuData } );
ReactDOM.render(
    <Kanban />,
    document.getElementById( 'root' ),
)
