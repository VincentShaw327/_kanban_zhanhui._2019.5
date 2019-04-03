import React, { Component, Fragment } from 'react';
import {
    Icon,
    Row,
    Col,
    List,
    Divider,
} from 'antd';
import './style.css'

export default class dynamic extends Component {
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
        const {data}=this.props;
        return (
            <Fragment>
                <List
                    size="small"
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    // bordered={true}
                    dataSource={data}
                    renderItem={(item,index) => (
                        <List.Item 
                        className={index%2?'dark':'light'} 
                        actions={[<span style={{color:'white',marginRight:10,fontSize:10}}>{item.time}</span>]}>
                            <div style={{color:'white',paddingLeft:10,fontSize:10}}>
                                <Icon type="double-right" /><span style={{marginLeft:15}}>{item.content}</span>
                            </div>
                        </List.Item>
                        )
                    }
                />
            </Fragment>
        )
    }
}