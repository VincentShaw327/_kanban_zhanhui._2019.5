import React, { Component } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Progress,
} from 'antd';
import styles from './index.less'
import Clock from 'widgets/Clock'
import DeviceState from 'widgets/DeviceState'
import {service as Service} from '../charts/pie.js'
import Gauge from '../charts/gauge.js'
import {serviceHistory as ServiceHistory} from '../charts/bar.js'
import {serviceTask as ServiceTask} from '../list/table.js'
import Dynamic from '../list/list.js'

export default class first extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
            serviceList:{
                debuging:21,
                completed:17,
                standby:26,
                list:[
                    {
                      item: "未开始",
                      count: 26
                    },
                    {
                      item: "维修中",
                      count: 21
                    },
                    {
                      item: "已完成",
                      count: 17
                    }
                  ]
            },
            malfunction:{
                machine:7,
                mold:12,
                fitting:25,
            },
            dynamicList: [
                {
                    content:'Racing car sprays burning fuel into crowd.',
                    time:'2019.03.01 14:24:04'
                },
                {
                    content:'Australian walks outback crash.',
                    time:'2019.03.01 14:24:04'
                },
                {
                    content:'Man charged over missing wedding girl.',
                    time:'2019.03.01 14:24:04'
                },
                {
                    content:'Los Angeles battles huge wildfires.',
                    time:'2019.03.01 14:24:04'
                },
                {
                    content:'Racing car sprays burning fuel into crowd.',
                    time:'2019.03.01 14:24:04'
                }
            ],
            serviceHistoryList: [
                { month: '3.1', apply: 2800, fulfil: 2800,  undone: 20 },
                { month: '3.2', apply: 1800, fulfil: 1800,  undone: 30 },
                { month: '3.3', apply: 950, fulfil: 950, undone: 50 },
                { month: '3.4', apply: 500, fulfil: 500,  undone: 10 },
                { month: '3.5', apply: 170, fulfil: 170, undone: 30 },
                { month: '3.6', apply: 170, fulfil: 170, undone: 30 },
                { month: '3.7', apply: 170, fulfil: 170,  undone: 30 },
                { month: '3.8', apply: 170, fulfil: 170, undone: 80 },
                { month: '3.9', apply: 170, fulfil: 170, undone: 30 },
                { month: '3.10', apply: 170, fulfil: 170, undone: 30 },
              ],
            serviceTaskList: [{
                key: '1',
                taskID:"20190415025",
                serviceObject: "A80模温机",
                cause:'电热管烧坏',
                man:"王大拿",
                planCompleteTime:"2019.0425 17:47",
                status:1
              }, {
                key: '2',
                name: '冷水主机动力开关箱',
                taskID:"20190415025",
                serviceObject: "A80模温机",
                cause:'电热管烧坏',
                man:"王大拿",
                planCompleteTime:"2019.0425 17:47",
                status:1
              }, {
                key: '3',
                name: '空压机开关箱',
                taskID:"20190415025",
                serviceObject: "A80模温机",
                cause:'电热管烧坏',
                man:"王大拿",
                planCompleteTime:"2019.0425 17:47",
                status:2
              }, {
                key: '4',
                name: '制氮机配电柜',
                taskID:"20190415025",
                serviceObject: "A80模温机",
                cause:'电热管烧坏',
                man:"王大拿",
                planCompleteTime:"2019.0425 17:47",
                status:0
              }, 
            ],
        }
    }

    render() {
        // const{serviceList,malfunction,dynamicList,serviceHistoryList,serviceTaskList}=this.state;
        const{serviceList,malfunction,dynamicList,serviceHistoryList,serviceTaskList}=this.props;
        const{list,debuging,completed,standby}=serviceList
        return (
            <div className={styles.first}>
                <header className={styles.header}>
                    <div className={styles.clock}>
                        <Clock style={{color:'white'}}/>
                    </div>
                </header>
                <section className={styles.section}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={10} className={styles.left}>
                            <div className={styles.service}>
                                <div className={styles.piechart}>
                                    {/* <Dynamic/> */}
                                    <Service data={serviceList.list}/>
                                </div>
                            </div>
                            <div className={styles.malfunction}>
                                <Row gutter={16} type="flex" justify="space-around" align="middle" style={{height:'100%'}}>
                                    <Col span={8} >
                                        <Gauge value={malfunction.machine} name="机台故障率" color="#28CB67" />
                                    </Col>
                                    <Col span={8} >
                                        <Gauge value={malfunction.mold} name="模具故障率" color="#00BCFF"/>
                                    </Col>
                                    <Col span={8} >
                                        <Gauge value={malfunction.fitting} name="配件故障率" color="#FFC106"/>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.dynamic}>
                                <div className={styles.piechart}>
                                    <Dynamic data={dynamicList} />
                                </div>
                            </div>
                        </Col>
                        <Col span={14} className={styles.right}>
                            <div className={styles.service_history}>
                                <ServiceHistory data={serviceHistoryList}/>
                            </div>
                            <div className={styles.service_task}>
                                <ServiceTask data={serviceTaskList}/>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
