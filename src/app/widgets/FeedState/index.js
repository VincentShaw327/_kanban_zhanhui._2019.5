import React, { Component, Fragment } from 'react'
import styles from './index'

const FeedState = ( {
txt, type, color, style, ...others
 } ) => {
     let bgColor
     let txColor
     let bdColor
    switch ( type ) {
        case 'RUNNING':
            bgColor = '#28CB67'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = txt?txt:'计量中'
            break;
        case 'WARNING':
            bgColor = '#FF3565'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '缺料'
            break;
        case 'DEBUG':
            bgColor = '#FFC106'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '调机中'
            break;
        case 'OFFLINE':
            bgColor = '#5f5f5f'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '离线中'
            break;
        case 'STANDBY':
            bgColor = '#6388D2'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '离线中'
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
        fontSize: '14px',
        padding: '2px 8px',
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


export default FeedState;
