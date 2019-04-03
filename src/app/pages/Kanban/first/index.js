import React, { Component } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Carousel,
} from 'antd';
// import mqtt from 'mqtt'
import styles from './index.less'
import Clock from 'widgets/Clock'
import DevState,{unqualified as Unqualified} from '../charts/pie.js'
import AchieveChart from '../charts/bar.js'
import Qualified from '../charts/line.js'
import Progress from '../list/table.js'
import _ from 'lodash/number'

export default class first extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
            deviceState:{
                run:60,
                fault:5,
                debug:11,
                standby:4,
                list:[
                   {
                     item: "待机",
                     count: 4
                   },
                   {
                     item: "调膜",
                     count: 11
                   },
                   {
                     item: "故障",
                     count: 5
                   },
                   {
                     item: "运行",
                     count: 60
                   },
                 ]
            },
            unqualifiedList:[
                {
                    item: "表面起膜",
                    count: 23
                },
                {
                    item: "飞边",
                    count: 21
                },
                {
                    item: "未填满",
                    count: 17
                },
                {
                    item: "黑斑",
                    count: 13
                },
                {
                    item: "变形",
                    count: 13
                },
                {
                    item: "破裂",
                    count: 13
                },
            ],
            progressList:[
              {
                key: '1',
                device:"A01",
                order: 2019021800,
                product:'鼠标外壳',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:_.random(0,800),
              }, {
                key: '2',
                name: '冷水主机动力开关箱',
                device:"A02",
                order: 2019021800,
                product:'产品',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '3',
                name: '空压机开关箱',
                device:"A03",
                order: 2019021800,
                product:'鼠标外壳',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '4',
                name: '制氮机配电柜',
                device:"A04",
                order: 2019021800,
                product:'鼠标外壳',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '5',
                name: '纯水机房配电柜',
                device:"A05",
                order: 2019021800,
                product:'-',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '6',
                name: '1F生产设备01',
                device:"A06",
                order: 2019021800,
                product:'-',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '7',
                name: '1F生产设备02',
                device:"A07",
                order: 2019021800,
                product:'-',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, {
                key: '8',
                name: '2F生产设备01',
                device:"A08",
                order: 2019021800,
                product:'-',
                capacity:23,
                progress:47,
                completed:234,
                plan:4000,
                rest:3406,
              }, 
            ],
            achieveList:[
                {
                  name: "plan",
                  "3.1": 18.9,
                  "3.2": 28.8,
                  "3.3": 39.3,
                  "3.4": 81.4,
                  "3.5": 47,
                  "3.6": 60.3,
                  "3.7": 24,
                  "3.8": 35.6,
                  "3.9": 35.6,
                  "3.10": 35.6,
                },
                {
                  name: "actual",
                  "3.1": 12.4,
                  "3.2": 23.2,
                  "3.3": 34.5,
                  "3.4": 99.7,
                  "3.5": 52.6,
                  "3.6": 35.5,
                  "3.7": 37.4,
                  "3.8": 42.4,
                  "3.9": 42.4,
                  "3.10": 42.4,
                }
            ],
            qualifiedList: [
                {
                  month: "3.1",
                  qualified: 17.0,
                  unqualified: 15.9
                },
                {
                  month: "3.2",
                  qualified: 16.9,
                  unqualified: 14.2
                },
                {
                  month: "3.3",
                  qualified: 19.5,
                  unqualified: 15.7
                },
                {
                  month: "3.4",
                  qualified: 14.5,
                  unqualified: 8.5
                },
                {
                  month: "3.5",
                  qualified: 18.4,
                  unqualified: 11.9
                },
                {
                  month: "3.6",
                  qualified: 21.5,
                  unqualified: 15.2
                },
                {
                  month: "3.7",
                  qualified: 25.2,
                  unqualified: 17.0
                },
                {
                  month: "3.8",
                  qualified: 26.5,
                  unqualified: 16.6
                },
                {
                  month: "3.9",
                  qualified: 23.3,
                  unqualified: 14.2
                },
              ],
        }
    }
    render() {
        // const {run,fault,debug,standby,list}=this.state.deviceState
        // const {unqualifiedList,qualifiedList,progressList,achieveList}=this.state
        const {run,fault,debug,standby,list}=this.props.deviceState
        const {unqualifiedList,qualifiedList,progressList,achieveList}=this.props
        console.log('run',run,this.props)
        return (
            <div className={styles.first}>
                <header className={styles.header}>
                    <div className={styles.clock}><Clock style={{color:'white'}}/></div>
                </header>
                <section className={styles.section}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={13} style={{border:'solid 0px white'}}>
                            <div className={styles.state}>
                                <div className={styles.piechart}>
                                    <DevState data={list}/>
                                </div>
                                <div className={styles.number}>
                                    <span className={styles.run}>{run}</span>
                                    <span className={styles.fault}>{fault}</span>
                                    <span className={styles.debug}>{debug}</span>
                                    <span className={styles.standby}>{standby}</span>
                                </div>
                            </div>
                            <div className={styles.progress}>
                                <Progress data={progressList}/>
                            </div>
                        </Col>
                        <Col span={10} style={{border:'solid 0px white',height:620}}>
                            <div className={styles.achieve}>
                                <AchieveChart data={achieveList}/>
                            </div>
                            <div className={styles.qualified}>
                                <Qualified data={qualifiedList}/>
                            </div>
                            <div className={styles.unqualified}>
                                <div className={styles.piechart}>
                                    <Unqualified data={unqualifiedList}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
