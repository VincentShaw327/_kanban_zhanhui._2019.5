import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Progress ,
    Table,
    Divider,
} from 'antd';
import moment from 'moment'
import './style.css'
import {_Service} from 'enums/task'


export default class progress extends Component {
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
        const columns = [
          {
            title: '机台',
            dataIndex: 'device',
            key: 'device',
            width: 90,
            onCell:(record,index)=>({class:'test'})
            // render: text => <a>{text}</a>,
          },  {
            title: '工单',
            dataIndex: 'order',
            width: 110,
            key: 'order',
            render: (text,record,index) => <span>{`${text}${index+1}`}</span>,
          }, {
           title: '产品',
            dataIndex: 'product',
            width: 100,
            key: 'product',
            // render: text => <span>220</span>,
          }, {
            // title: '产能(pcs/min)',
            title: (<div>产能<br/><span>(pcs/min)</span></div>),
             dataIndex: 'capacity',
            width: 80,
            key: 'capacity',
            //  render: text => <span>220</span>,
           }, {
            title: '进度',
            dataIndex: 'progress',
            key: 'progress',
            width:160,
            render: (text,record) => (
              <div>
                  <div>{record.completed?record.completed:'-'}/{record.plan?record.plan:'-'}</div>
                <Progress style={{fontSize:0}} percent={text}/>
              </div>),
          }, {
            title: '剩余',
            dataIndex: 'rest',
            key: 'rest',
            render: (num,record) =>{
              let time=moment.duration(num, 'minutes');
              let {plan,completed,capacity}=record
              plan=plan||0
              completed=completed||0
              capacity=capacity||0
              // console.log('time',time.hours())
              const days=time.days();
              const hours=time.hours();
              // const minutes=time.minutes();
              const minutes=Math.ceil((plan-completed)/capacity)
              return(<span>
                {/* {`${hours}时${minutes}分`} */}
                {`${minutes}分`}
              </span>)
            } 
          }, 
        ];
        return (
            <Fragment>
                <Table columns={columns} dataSource={data} bordered size="small" pagination={{ hideOnSinglePage: true, pageSize: 10 }} />
            </Fragment>
        )
    }
}


class plan extends Component {
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
      const{ data }=this.props;
      const columns = [
          {
            title: '工单编号',
            dataIndex: 'order',
            key: 'order',
            width: 180,
            // onCell:(record,index)=>({class:'test'}),
            render: (text,record,index) => <span>{`${text}${index+1}`}</span>,
          },  {
            title: '产品名称',
            dataIndex: 'product',
            key: 'product',
            // render: text => <span>220</span>,
          }, {
           title: '数量',
            dataIndex: 'number',
            key: 'number',
            // render: text => <span>220</span>,
          }, {
            title: '计划开始时间',
             dataIndex: 'startTime',
             key: 'startTime',
            //  render: text => <span>220</span>,
           },
      ];
      
        return (
            <Fragment>
              <Table columns={columns} dataSource={data} bordered size="small" pagination={{ hideOnSinglePage: true, pageSize: 10 }} />
            </Fragment>
        )
    }
}

const serviceTask =({data})=> {
  const columns = [
    {
      title: '任务编号',
      dataIndex: 'taskID',
      key: 'taskID',
      width: 180,
      onCell:(record,index)=>({class:'test'})
      // render: text => <a>{text}</a>,
    },  {
      title: '维修对象',
      dataIndex: 'serviceObject',
      key: 'serviceObject',
      // render: text => <span>220</span>,
    }, {
      title: '故障原因',
      dataIndex: 'cause',
      key: 'cause',
      // render: text => <span>220</span>,
    },  {
      title: '执行人',
      dataIndex: 'man',
      key: 'man',
      // render: text => <span>220</span>,
    },{
      title: '预计完成时间',
        dataIndex: 'planCompleteTime',
        key: 'planCompleteTime',
        // render: text => <span>220</span>,
      },{
        title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: v =>{
            let _color=v==0?'#FF3565':v==1?"#367AF7":v==2?"#00D09D":'white';
            return <span style={{color:_color}}>{_Service.getDescFromValue(v)}</span>
          } 
        },
  ];
  // const{ data }=this.props;
  return (
      <Fragment>
        <Table 
        columns={columns} 
        dataSource={data} 
        bordered 
        size="small" 
        pagination={{ hideOnSinglePage: true, pageSize: 10 }} 
        />
      </Fragment>
  )
}

export{
  progress,
  plan,
  serviceTask
}