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
// import DevState,{unqualified as Unqualified} from '../charts/pie.js'
import Gauge from '../charts/gauge.js'
import {yieldRate as YRate} from '../charts/line.js'
import {plan as Task} from '../list/table.js'

export default class first extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
        }
    }

    render() {

        return (
            <div className={styles.first}>
                <header className={styles.header}>
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
                                            <div className={styles.state}><DeviceState type="RUNNING" txt="生产中" /></div>
                                            <div className={styles.circle}>80 s</div>
                                        </div>
                                    </Col>
                                    <Col span={15} style={{border:'solid 0px white',height:'100%'}}>
                                        <div className={styles.workorder}>
                                            <span className={styles.order}>20190318001</span>
                                            <span className={styles.number}>3000<span className={styles.unit}>pcs</span></span>
                                            <span className={styles.name}>鼠标外壳</span>
                                            <span className={styles.perfection}>28000<span className={styles.unit}>pcs</span></span>
                                            <span className={styles.time}>20190320 17:30:01</span>
                                            <span className={styles.percent}>87%</span>
                                            <span className={styles.progress}><Progress strokeWidth={16} percent={30} /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.down}>
                                {/* <Progress/> */}
                                <div className={styles.inject}>
                                    <span className={styles.name}>注塑机</span>
                                    <DeviceState type="RUNNING" txt="运行" />
                                </div>
                                <div className={styles.robot}>
                                    <span className={styles.name}>机械手</span>
                                    <DeviceState type="RUNNING" txt="故障" />
                                </div>
                                <div className={styles.mold}>
                                    <span className={styles.name}>模温机</span>
                                    <DeviceState type="RUNNING" txt="调膜" />
                                </div>
                            </div>
                        </Col>
                        <Col span={10} style={{border:'solid 0px white',height:620}}>
                            <div className={styles.oee}>
                                <Row gutter={16} style={{border:'solid 0px white',height:'100%'}}>
                                    <Col span={6} style={{border:'solid 0px white',height:'40%'}}>
                                        <span className={styles.percent}>86%</span>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge/>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge/>
                                    </Col>
                                    <Col span={6} style={{border:'solid 0px white',height:'85%'}}>
                                        <Gauge/>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.qualified}>
                                <YRate/>
                            </div>
                            <div className={styles.task}>
                                {/* <div className={styles.piechart}>
                                    <Unqualified/>
                                </div> */}
                                <Task/>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
