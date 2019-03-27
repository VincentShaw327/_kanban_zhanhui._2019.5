import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Table,
    Divider,
} from 'antd';

import './style.css'


export default class table extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
        }
    }

    componentWillMount() {}

    // 组件已经加载到dom中
    componentDidMount() {

    }

    render() {
        const columns = [
          {
            title: '机台',
            dataIndex: 'device',
            key: 'device',
            width: 180,
            // render: text => <a>{text}</a>,
          },  {
            title: '工单',
            dataIndex: 'order',
            key: 'order',
            render: text => <span>220</span>,
          }, {
           title: '产品',
            dataIndex: 'product',
            key: 'product',
            render: text => <span>220</span>,
          }, {
            title: '产能',
             dataIndex: 'capacity',
             key: 'capacity',
             render: text => <span>220</span>,
           }, {
            title: '进度',
            dataIndex: 'progress',
            key: 'progress',
            render: text => <span>2.41</span>,
          }, {
            title: '剩余',
            dataIndex: 'rest',
            key: 'rest',
            render: text => <span>2.41</span>,
          }, 
        ];

        const data = [{
            key: '1',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '2',
            name: '冷水主机动力开关箱',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '3',
            name: '空压机开关箱',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '4',
            name: '制氮机配电柜',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '5',
            name: '纯水机房配电柜',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '6',
            name: '1F生产设备01',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '7',
            name: '1F生产设备02',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '8',
            name: '2F生产设备01',
            device:"A01",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '9',
            name: '2F生产设备02',
            device:"A09",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }, {
            key: '10',
            name: '3F生产设备01',
            device:"A10",
            order: 0.85,
            product:'产品',
            capacity:23,
            progress:47,
            rest:3406,
          }
        ];

        return (
            <Fragment>
                    <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true, pageSize: 10 }} />
            </Fragment>
        )
    }
}
