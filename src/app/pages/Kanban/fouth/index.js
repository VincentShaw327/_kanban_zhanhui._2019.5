import React, { Component } from 'react';
import {Row,Col} from 'antd';
import styles from './index.less'
import Clock from 'widgets/Clock'
import DeviceState from 'widgets/DeviceState'
import FeedState from 'widgets/FeedState'
import OrderState from 'widgets/OrderState'
// import {service as Service} from '../charts/pie.js'
import {Metering} from '../charts/gauge.js'
// import {serviceHistory as ServiceHistory} from '../charts/bar.js'
// import {serviceTask as ServiceTask} from '../list/table.js'
// import Dynamic from '../list/list.js'
import {_Dry} from 'enums/device'
import {_PA,_ABS,_POM} from 'enums/feed'
import {order} from 'enums/orders'


export default class first extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
            feedData:{
                pa:{
                    feedState:1,
                    feedPercent:67,
                    metereState:2,
                    meterePercent:67,
                    meterWeight:7.4
                },
                abs:{
                    feedState:1,
                    feedPercent:67,
                    metereState:2,
                    meterePercent:67,
                    meterWeight:7.4
                },
                pom:{
                    feedState:1,
                    feedPercent:67,
                    metereState:2,
                    meterePercent:47,
                    meterWeight:5.4
                },
            },
            dryData:{
                state:1,
                setTemp:80,
                actualTemp:78.6,
                percent:69
            },
            orderList:[
                {
                    machineID:'A01机台',
                    orderID:'20190418001',
                    product:'鼠标外壳',
                    state:1
                },
                {
                    machineID:'A01机台',
                    orderID:'20190418001',
                    product:'鼠标外壳',
                    state:0
                },
                {
                    machineID:'A03机台',
                    orderID:'20190418001',
                    product:'鼠标外壳',
                    state:3
                },
                {
                    machineID:'A01机台',
                    orderID:'20190418001',
                    product:'鼠标外壳',
                    state:-1
                },
            ]
        }
    }

    render() {
        // const {feedData,dryData,orderList}=this.state;
        const {feedData,dryData,orderList}=this.props;
        const {pa,abs,pom}=feedData
        const Order=({machineID,orderID,product,state})=>(
            <div className={styles.feedOrder}>
                <header className={styles.header}>{machineID?machineID:'机台名称'}</header>
                <section className={styles.section}>
                    <p className={styles.id}>工单:<span>{orderID?orderID:'20190316001'}</span></p>
                    <p className={styles.product}>产品名称:<span>{product?product:"鼠标外壳"}</span></p>
                </section>
                <aside className={styles.aside}>
                    <OrderState type={order.getTypeFromValue(state)}/>
                </aside>
            </div>
        )

        return (
            <div className={styles.first}>
                <header className={styles.header}>
                    <div className={styles.clock}>
                        <Clock style={{color:'white'}}/>
                    </div>
                </header>
                <section className={styles.section}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={13} className={styles.left}>
                            <div className={styles.malfunction}>
                                <Row gutter={16} type="flex" justify="space-around" align="bottom" style={{height:'100%'}}>
                                    <Col span={8}>
                                        <div className={styles.pa} >
                                            {/* <img src={'src/app/assets/images/empty/cup.png'}/> */}
                                            <FeedState style={{margin: '90px 25px'}} type={_PA.getTypeFromValue(pa.feedState)}/>
                                        </div>
                                        <div className={styles.metering}>
                                            <span style={{fontSize:25,color:'white'}}>{pa.meterePercent}%</span>
                                            <Metering value={pa.meterePercent} weight={pa.meterWeight} />
                                            {/* <div style={{width:'80%'}}></div> */}
                                            <div><FeedState  type={_PA.getTypeFromValue(pa.metereState)} /></div>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={styles.abs} >
                                            <FeedState style={{margin: '90px 25px'}} type={_PA.getTypeFromValue(abs.feedState)} />
                                        </div>
                                        <div className={styles.metering}>
                                            <span style={{fontSize:25,color:'white'}}>{abs.meterePercent}%</span>
                                            <Metering value={abs.meterePercent} weight={abs.meterWeight} />
                                            {/* <div style={{width:'80%'}}></div> */}
                                            <div><FeedState  type={_PA.getTypeFromValue(abs.metereState)} /></div>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={styles.pom} >
                                            <FeedState style={{margin: '90px 25px'}} type={_PA.getTypeFromValue(pom.feedState)}/>
                                        </div>
                                        <div className={styles.metering}>
                                            <span style={{fontSize:25,color:'white'}}>{pom.meterePercent}%</span>
                                                <Metering value={pom.meterePercent} weight={pom.meterWeight} />
                                            {/* <div style={{width:'80%'}}></div> */}
                                            <div><FeedState  type={_PA.getTypeFromValue(pom.metereState)} /></div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.dry}>
                                <Row style={{height:'100%'}}>
                                    <Col span={7} style={{border:'solid 0px',height:'100%'}}>
                                        <div className={styles.state}>
                                            <DeviceState type={_Dry.getTypeFromValue(dryData.state)}/>
                                        </div>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px',height:'100%'}}>
                                        <div style={{fontSize: 14,position: 'absolute',top: 50}}>设定温度:<span style={{fontSize:24}}>{dryData.setTemp} ℃</span></div>
                                        <div style={{fontSize: 14,position: 'absolute',bottom: 50}}>实际温度:<span style={{fontSize:24}}>{dryData.actualTemp} ℃</span></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={7} className={styles.right}>
                            {
                                orderList.map( record =>(<Order {...record} />))
                            }
                            {/* <Order machineID="A01机台" orderID="20190316001" product="鼠标外壳" />
                            <Order machineID="A02机台" orderID="20190316002" product="显示器外壳"/>
                            <Order machineID="A03机台" orderID="20190316003" product="主机前外壳"/>
                            <Order machineID="A04机台" orderID="20190316004" product="主机后外壳"/> */}
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
