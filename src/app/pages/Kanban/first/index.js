import React, { Component } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Carousel,
} from 'antd';
import styles from './index.less'
import Clock from 'widgets/Clock'
import DevState,{unqualified as Unqualified} from '../charts/pie.js'
import AchieveChart from '../charts/bar.js'
import Qualified from '../charts/line.js'
import Progress from '../list/table.js'

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
                    <div className={styles.clock}><Clock style={{color:'white'}}/></div>
                </header>
                <section className={styles.section}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={13} style={{border:'solid 0px white'}}>
                            <div className={styles.state}>
                                <div className={styles.piechart}>
                                    <DevState/>
                                </div>
                                <div className={styles.number}>
                                    <span className={styles.run}>60</span>
                                    <span className={styles.fault}>5</span>
                                    <span className={styles.debug}>11</span>
                                    <span className={styles.standby}>4</span>
                                </div>
                            </div>
                            <div className={styles.progress}>
                                <Progress/>
                            </div>
                        </Col>
                        <Col span={10} style={{border:'solid 0px white',height:620}}>
                            <div className={styles.achieve}>
                                <AchieveChart/>
                            </div>
                            <div className={styles.qualified}>
                                <Qualified/>
                            </div>
                            <div className={styles.unqualified}>
                                <div className={styles.piechart}>
                                    <Unqualified/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
