
import React, { Component } from 'react';
import moment from 'moment';
import { Form, Select, Input, Button, Icon, DatePicker, TimePicker, Radio, Switch, Cascader, Checkbox, message, InputNumber } from 'antd';
// import AntUploader from './AntUploader';
import AntUploader from '../../TCommon/AntUploader';
import { TPostData } from '../../../utils/TAjax';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const { Option } = Select;
const RadioGroup = Radio.Group;
const DefaultTime = new Date();


class LazyCascader extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            options: this.props.options,
            lazyItemID: 0,
            selectedOptions: {},
        }
    }

  onChange = ( value, selectedOptions ) => {
    this.setState( {
        lazyItemID: value[0],
    } );
    this.props.onChange( value );
  }

  resetValue=( v ) => {
      if ( v ) {
          let options = this.state.options,
              tempList = [];
          tempList = options.map( ( item, index ) => ( {
                        value: item.value,
                        label: item.label,
                        isLeaf: false,
                    } ) );
          this.setState( {
              options: tempList,
          } );
      }
  }

  loadData = ( selectedOptions ) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    const {
url, op, obj, lazyItem,
 } = this.props.fetchParameter;
    obj[lazyItem] = targetOption.value;
    TPostData(
url, op, obj,
        ( res ) => {
            const list = [];
            const Ui_list = res.obj.objectlist || [];
            Ui_list.forEach( ( item, index ) => {
                list.push( {
                    key: index,
                    value: item.UUID.toString(),
                    label: item.Name,
 } )
            } )
            targetOption.loading = false;
            targetOption.children = list;
            this.setState( {
              options: [...this.state.options],
              selectedOptions: targetOption,
            } );
        },
        ( error ) => {
            message.info( error );
        },
    )
  }

  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        // changeOnSelect={false}
        onPopupVisibleChange={this.resetValue}
      />
    );
  }
}

class LazySelect extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            itemList: [],
            options: this.props.options,
            lazyItemID: 0,
            selectedOptions: {},
        }
    }

    componentWillMount() {
        this.loadData();
    }

    componentWillUnmount() {
        // client.end()
        console.log( '下拉列表数据unmout' );
    }

    onChange = ( value, selectedOptions ) => {
        // this.setState({lazyItemID: value[0]});
        // this.props.onChange(value);
    }

    resetValue = ( v ) => {
        if ( v ) {
            let options = this.state.options,
                tempList = [];
            tempList = options.map( ( item, index ) => ( { value: item.value, label: item.label, isLeaf: false } ) );
            this.setState( { options: tempList } );
        }
    }

    loadData = ( selectedOptions ) => {
        // const targetOption = selectedOptions[selectedOptions.length - 1];
        // targetOption.loading = true;
        const {
 url, op, obj, lazyItem,
 } = this.props.fetchParameter;
        // obj[lazyItem] = targetOption.value;
        // obj[lazyItem] = targetOption.value;
        TPostData( url, op, obj, ( res ) => {
            const list = [];
            const Ui_list = res.obj.objectlist || [];
            console.log( '获取到下拉列表数据：', res );
            Ui_list.forEach( ( item, index ) => {
                list.push( {
 key: index, value: item.UUID.toString(), text: item.Name, label: item.Name,
 } )
            } )
            // targetOption.loading = false;
            // targetOption.children = list;
            this.setState( {
                // options: [...this.state.options],
                // selectedOptions: targetOption
                itemList: list,
            } );
        }, ( error ) => {
            message.info( error );
        } )
    }

    render() {
        return (
            <Select
              onBlur={e => console.log( 'blur', e )}
            >
                {/* {item.hasAllButtom?<Option key="1000" value="-1" style={{borderBottom:'solid 1px #a4a4a9'}}>全部</Option>:null} */}
                {
                    this.state.itemList.map( ( item, i, arr ) => <Option key={i} value={item.value}>{item.text || item.value}</Option> )
                }
            </Select>
        );
    }
}

export default class CFormItem extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            img_url: '',
        }
    }
    changePathUrl=( path ) => {
        this.setState( {
            img_url: path,
        } )
    }
    // componentWillReceiveProps  componentWillUnmount
    componentWillReceiveProps() {
        this.setState( { img_url: '' } );
    }

    render() {
        const {
            getFieldDecorator,
            formItemLayout,
            item,
        } = this.props;

        // const formItemLayout = formItemLayout || {};
        // const item = item || {};
        // console.log('formitem',item);
        let defaultValue = item.defaultValue || ( item.type == 'number' ? 0 : '' );
        switch ( item.type ) {
            case 'string':
                return (
                <FormItem label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                    {
                        getFieldDecorator(
                            item.name,
                            {
                                rules: item.rules,
                                initialValue: defaultValue,
                            },
                        )( <Input
                          placeholder={
                                    item.placeholder || ''
                                }
                        /> )
                    }
                </FormItem>
                )
            break;
            case 'number':
                return ( <FormItem label={item.label}
                  key={item.name}
                  help={item.help}
                  {...formItemLayout}
                >
                                {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue } )(
                                  // <Input type="number" placeholder={item.placeholder||'' } />
                                  <InputNumber min={0} max={item.rules.max} /> )}
                         </FormItem> )
                break;
            case 'date':
                defaultValue = moment( defaultValue || DefaultTime, 'YYYY-MM-DD hh:mm:ss' );
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue } )( <DatePicker showTime format="YYYY/MM/DD" /> )}
                         </FormItem> )
                break;

            case 'rangeDate':
                defaultValue = moment( defaultValue || DefaultTime, 'YYYY-MM-DD hh:mm:ss' );
                const rangeConfig = {
                  rules: [{ type: 'array', required: true, message: '请选择日期' }],
                };
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {getFieldDecorator( item.name, rangeConfig )( <RangePicker
                              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf( 'month' )] }}
                                    // showTime
                              format="YYYY/MM/DD HH:mm:ss"
                            /> )}
                         </FormItem> )
                break;

            case 'select':
              return ( <FormItem
                label={item.label}
                key={item.name}
                help={item.help}
                        // help="help"
                {...formItemLayout}
              >
                        {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue.toString() } )( <Select
                          style={{ width: item.width }}
                        >
                                    {item.hasAllButtom ? <Option key="1000" value="-1" style={{ borderBottom: 'solid 1px #a4a4a9' }}>全部</Option> : null}
                                    {
                                        Array.isArray( item.options ) ?
                                            item.options.map( ( item, i, arr ) => <Option key={i} value={item.value}>{item.text || item.value}</Option> ) : ''
                                    }
                                                                                                                       </Select> )}
                       </FormItem> )
                break;

            case 'LazySelect':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                          {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue } )( <LazySelect fetchParameter={item.fetchParameter} /> )}
                         </FormItem> )
                break;

            case 'multipleSelect':
              return ( <FormItem
                label={item.label}
                key={item.name}
                {...formItemLayout}
              >
                        {getFieldDecorator( item.name, { initialValue: defaultValue } )( <Select mode="multiple" style={{ width: item.width }} onChange={item.onChange || this.props.onSlectChange}>
                                {
                                    item.options.map( ( item, i, arr ) => <Option key={item.value} value={item.value}>{item.text || item.value}</Option> )
                                }
                                                                                         </Select> )}
                       </FormItem> )
                break;

            case 'cascader':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                          {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue } )( <Cascader options={item.options} style={{ width: item.width }} changeOnSelect /> )}
                         </FormItem> )
                break;

            case 'LazyCascader':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                          {getFieldDecorator( item.name, { rules: item.rules, initialValue: defaultValue } )( <LazyCascader options={item.options} onChange={item.resetValue} fetchParameter={item.fetchParameter} /> )}
                         </FormItem> )
                break;

            case 'radio':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {
                                getFieldDecorator( item.name, { initialValue: defaultValue } )( <RadioGroup>
                                    {
                                        item.options.map( item => <Radio key={item.value} value={item.value}>{item.text || item.value}</Radio> )
                                    }
                                                                                                </RadioGroup> )}
                         </FormItem> )
                break;

            case 'checkbox':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {getFieldDecorator( item.name, { initialValue: defaultValue } )( <Checkbox.Group options={item.options} /> )}
                         </FormItem> )
                break;

            case 'switch':
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {getFieldDecorator( item.name, { initialValue: defaultValue } )( <Switch /> )}
                         </FormItem> )
                break;

            case 'antUpload':
                defaultValue = this.state.img_url || defaultValue || '';
                return ( <FormItem
                  label={item.label}
                  key={item.name}
                  {...formItemLayout}
                >
                            {getFieldDecorator( item.name, { initialValue: defaultValue } )( <AntUploader defaultUrl={defaultValue} actionUrl={item.url} onPathChange={this.changePathUrl} /> )}
                            {/* <img className="uploadImg" src={defaultValue}  style={{marginTop:"15px"}}/> */}
                         </FormItem> )
                break;

            case 'submit':
                return ( <FormItem {...formItemLayout}>
                          <Button type="primary" >确定</Button>
                          <Button type="default" style={{ marginLeft: 20 }}>取消</Button>
                         </FormItem> )

            default:
                return '';
                break;
        }
    }
}
