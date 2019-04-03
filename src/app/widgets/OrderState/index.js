import React, { Component, Fragment } from 'react'
import styles from './index'

const OrderState = ( {
txt, type, color, style, ...others
 } ) => {
     let bgColor
     let txColor
     let bdColor
    switch ( type ) {
        case 'PRODUCTION':
            bgColor = '#28CB67'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = txt?txt:'生产中'
            break;
        case 'WARNING':
            bgColor = '#de3e3e'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '报警中'
            break;
        case 'OFFLINE':
            bgColor = '#5f5f5f'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '离线中'
            break;
        case 'STOP':
            bgColor = '#5f5f5f'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '停止中'
            break;
        case 'PAUSE':
            bgColor = '#5f5f5f'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '暂停中'
            break;
        case 'STANDBY':
            bgColor = '#a05d1c'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '未排产'
            break;

        default:
            bgColor = 'white'
            txColor = '#393535'
            bdColor = '#d8d8d8'
            txt = '默认状态'
            break;
    }
    const initStyle = {
        color: color || txColor,
        border: 'solid 1px',
        fontSize: '1.2em',
        padding: '0.3em 0.85em',
        borderRadius: '0.3em',
        display: 'inline-block',
        borderColor: '#d8d8d8',
        background: bgColor,
    }
    const ds_styles = Object.assign( initStyle, style )
    return (
        <div style={ds_styles} >{txt}</div>
    )
}


export default OrderState;
