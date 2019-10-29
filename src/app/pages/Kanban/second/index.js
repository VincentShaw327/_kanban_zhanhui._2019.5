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
import OrderState from 'widgets/OrderState'
// import DevState,{unqualified as Unqualified} from '../charts/pie.js'
import Gauge from '../charts/gauge.js'
import {yieldRate as YRate} from '../charts/line.js'
import {plan as Task} from '../list/table.js'
import {order} from 'enums'
import {_Inj,_Robot,_Mold} from 'enums/device'
import bgimg02 from '../../../assets/images/empty/02.png'


export default class first extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
            orderData:{
                orderID:'20190318001',
                planNum:35000,
                fulfillNum:23650,
                productName:'鼠标外壳',
                cycle:80,
                state:1,
                expectedFinishTime:'2019-03-29 19:34:00',
                percent:87
            },
            deviceState:{
                inject:2,
                robot:1,
                mold:2
            },
            effectiveness:{
                OEE:87,
                timeRate:90,
                performanceRate:92,
                deviceEffRate:82,
            },
            yieldRateList:[
                {
                  month: "3.1",
                  YieldRate: 17.0,
                },
                {
                  month: "3.2",
                  YieldRate: 16.9,
                },
                {
                  month: "3.3",
                  YieldRate: 19.5,
                },
                {
                  month: "3.4",
                  YieldRate: 14.5,
                },
                {
                  month: "3.5",
                  YieldRate: 18.4,
                },
                {
                  month: "3.6",
                  YieldRate: 21.5,
                },
                {
                  month: "3.7",
                  YieldRate: 25.2,
                },
                {
                  month: "3.8",
                  YieldRate: 26.5,
                },
                {
                  month: "3.9",
                  YieldRate: 23.3,
                },
              ],
            taskList: [{
                key: '1',
                device:"A01",
                order: '2019021800',
                product:'鼠标键盘',
                capacity:23098,
                progress:47,
                number:3406,
                startTime:'2019 07.13 15:47:24'
              }, {
                key: '2',
                name: '冷水主机动力开关箱',
                device:"A01",
                order: '2019021800',
                product:'产品',
                capacity:23098,
                progress:47,
                number:3406,
                startTime:'2019 07.13 15:47:24'
              }, {
                key: '3',
                name: '空压机开关箱',
                device:"A01",
                order: '2019021800',
                product:'产品',
                capacity:23098,
                progress:47,
                number:3406,
                startTime:'2019 07.13 15:47:24'
              }, {
                key: '4',
                name: '制氮机配电柜',
                device:"A01",
                order: '2019021800',
                product:'产品',
                capacity:23098,
                progress:47,
                number:3406,
                startTime:'2019 07.13 15:47:24'
              }, {
                key: '5',
                name: '制氮机配电柜',
                device:"A01",
                order: '2019021800',
                product:'产品',
                capacity:23098,
                progress:47,
                number:3406,
                startTime:'2019 07.13 15:47:24'
              }, 
            ]
        }
    }

    render() {
        // const{orderData,deviceState,effectiveness,yieldRateList,taskList}=this.state;
        const{orderData,deviceState,effectiveness,yieldRateList,taskList}=this.props;
        return (
            <div className={styles.second} style={{backgroundImage:`url(${bgimg02})`}}>
                <header className={styles.header} onClick={this.props.togglescreen}>
                    <div className={styles.clock}>
                        <Clock style={{color:'white'}}/>
                    </div>
                </header>
                <section className={styles.section}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={13} style={{border:'solid 0px white',height:620}}>
                            <div className={styles.up}>
                                <Row style={{height:'100%'}}>
                                    <Col span={9} style={{border:'solid 0px white',height:'100%'}}>
                                        <div className={styles.workcenter}>
                                            <div className={styles.state}>
                                                {/* <OrderState type="PRODUCTION" txt="生产中" /> */}
                                                <OrderState type={order.getTypeFromValue(1)} />
                                            </div>
                                            <div className={styles.circle}>80 s</div>
                                        </div>
                                    </Col>
                                    <Col span={15} style={{border:'solid 0px white',height:'100%'}}>
                                        <div className={styles.workorder}>
                                            <span className={styles.order}>{orderData.orderID}</span>
                                            <span className={styles.number}>{orderData.planNum}<span className={styles.unit}>pcs</span></span>
                                            <span className={styles.name}>{orderData.productName}</span>
                                            <span className={styles.perfection}>{orderData.fulfillNum}<span className={styles.unit}>pcs</span></span>
                                            <span className={styles.time}>{orderData.expectedFinishTime}</span>
                                            <span className={styles.percent}>{orderData.percent}%</span>
                                            <span className={styles.progress}><Progress strokeWidth={16} percent={orderData.percent} /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.down}>
                                {/* <Progress/> */}
                                <div className={styles.inject}>
                                    <span className={styles.name}>注塑机</span>
                                    <DeviceState type={_Inj.getTypeFromValue(deviceState.robot ||1)} />
                                </div>
                                <div className={styles.robot}>
                                    <span className={styles.name}>机械手</span>
                                    <DeviceState type={_Robot.getTypeFromValue(deviceState.inject ||1)} />
                                </div>
                                <div className={styles.mold}>
                                    <span className={styles.name}>模温机</span>
                                    <DeviceState type={_Mold.getTypeFromValue(1 ||1)} />
                                </div>
                            </div>
                        </Col>
                        <Col span={10} style={{border:'solid 0px white',height:620}}>
                            <div className={styles.oee}>
                                <Row gutter={16} style={{border:'solid 0px white',height:'100%'}}>
                                    <Col span={6} style={{border:'solid 0px white',height:'40%'}}>
                                        <span className={styles.percent}>{effectiveness.OEE}%</span>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge value={effectiveness.timeRate} name="时间稼动率" color="#28CB67" />
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge value={effectiveness.performanceRate} name="性能稼动率" color="#00BCFF"/>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge value={effectiveness.deviceEffRate} name="良品率" color="#FFC106"/>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.qualified}>
                                <YRate data={yieldRateList}/>
                            </div>
                            <div className={styles.task}>
                                {/* <div className={styles.piechart}>
                                    <Unqualified/>
                                </div> */}
                                <Task data={taskList}/>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
