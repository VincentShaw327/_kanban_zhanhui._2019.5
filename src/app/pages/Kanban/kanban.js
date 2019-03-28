import React, { Component } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Carousel,
} from 'antd';
import styles from './style.less'
import Clock from 'widgets/Clock'
import First from './first'
import Second from './second'


export default class Home extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
        }
    }

    componentWillMount() {}

    // 组件已经加载到dom中
    componentDidMount() {

    }

    onChange=(a,b,c,d)=>{
        console.log('change',a,b,c,d)
    }

    render() {

        return (
            <div className={styles.kanban}>
                {/* <Card>kanban</Card> */}
                {/* <Carousel autoplay> */}
                <Carousel afterChange={this.onChange}>
                    <First/>
                    <Second/>
                    {/* <div className={styles.two}>
                        <h3>2</h3>
                        <img src={p02} />
                    </div> */}
                    <div className={styles.three}>
                        {/* <h3>3</h3>
                        <img src={p02} /> */}
                    </div>
                    <div className={styles.four}>
                        {/* <img src={p02} /> */}
                    </div>
                </Carousel>
            </div>
        )
    }
}
