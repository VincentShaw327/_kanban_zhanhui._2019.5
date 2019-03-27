import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Layout,
    Menu,
    Icon,
    Input,
    Row,
    Col,
    Avatar,
    Dropdown,
    AutoComplete,
    Button,
} from 'antd';
// import LOGO from '../../images/T-3.png';
// import LOGO from '../../images/_TOP-STAR-LOGO.png';
// import LOGO from '../../images/_TOP-STAR-LOGO_01.jpg';
import LOGO from 'images/_TOP-STAR-LOGO_02.jpg';
import { white } from 'ansi-colors';
// import LOGO from '../../images/logo.png';
import styles from './THeader.less';
// import HeaderSearch from '../../components/ant-design-pro/HeaderSearch';
const { Option } = AutoComplete;
const { Header } = Layout;
const { Search } = Input;

const userMenu = (
    <Menu className="userlistMenu">
        <Menu.Item>
            <Link to="/setting/user_set">
                <Icon type="user" />
                <span className="itemTxt">个人中心</span>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/login">
                <Icon type="logout" />
                <span className="itemTxt">退出登录</span>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Icon type="setting" />
            <span className="itemTxt">设置</span>
        </Menu.Item>
    </Menu>
)


export default class THeader extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isFullScreen: false,
            dataSource: [],
            searchValue: '',
        }
        this.fullScreen.bind( this );
        this.exitScreen.bind( this );
    }

    fullScreen( ele ) {
        console.log( 'ele', ele );
        this.setState( { isFullScreen: true } );
        const el = document.documentElement;
        const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
        if ( typeof rfs !== 'undefined' && rfs ) {
            rfs.call( el );
        } else if ( typeof window.ActiveXObject !== 'undefined' ) {
            // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
            const wscript = new ActiveXObject( 'WScript.Shell' );
            if ( wscript != null ) {
                wscript.SendKeys( '{F11}' );
            }
        }
    }
    // 退出全屏
    exitScreen() {
        this.setState( { isFullScreen: false } );
        if ( document.exitFullscreen ) {
            document.exitFullscreen();
        } else if ( document.mozCancelFullScreen ) {
            document.mozCancelFullScreen();
        } else if ( document.webkitCancelFullScreen ) {
            document.webkitCancelFullScreen();
        } else if ( document.msExitFullscreen ) {
            document.msExitFullscreen();
        }
        if ( typeof cfs !== 'undefined' && cfs ) {
            cfs.call( el );
        }
    }

    onSelect =( value, option ) => {
        console.log( 'props', value, option, this.props.handleSearch );
        // this.props.TPageOpen( e.key );
        this.props.handleSearch.TPageOpen( value, this.state.searchValue );
    }

    renderOptions=() => {
        this.dataSource.map( () => {

        } )
        return (
          <Option key={item.category} text={item.category}>
            包含{item.category}的结果
          </Option> )
    }

    render() {
        const { dataSource } = this.state;
        return (
            <Header className={styles.header}>
              {/* <div className="logo" /> */}
              <Row gutter={16}>
                  <Col span={3}>
                      <div className="header-title">
                            {/* <span>T-MES智能制造执行系统</span> */}
                            <img src={LOGO} alt="" style={{ width: '100%', maxWidth: 150 }} />
                      </div>
                  </Col>
                  <Col span={6}>
                      <div className={styles.header_title}>
                            <span>通用PC脚手架</span>
                            {/* <img src={LOGO} style={{width:'100%',maxWidth:150}}/> */}
                      </div>
                  </Col>
                  <Col span={11}>
                      {/* <heard-seach>
                          <Search
                              placeholder="输入..."
                              onSearch={value => console.log(value)}
                              // enterButton
                              // style={{ width: 800 }}
                          />
                      </heard-seach> */}
                      {/* <div className="global-search-wrapper" style={{ width: '100%',height:"100%" }}> */}
                      {/* </div> */}
                  </Col>
                  <Col span={3} style={{ border: 'solid 0px' }}>
                      <div className={styles.menu_item}>
                          <Dropdown overlay={userMenu}>
                            {/* <span style={{ color: '#fcfcfc', fontWeight: 'bold' }}>
                            欢迎你,<span style={{ color: '#ecb44c' }}>系统管理员!</span>
                            </span> */}
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span style={{ marginLeft: 6, color: 'white', fontSize: 16 }}>user</span>
                            </span>
                          </Dropdown>
                      </div>
                  </Col>
                  {/* <Col span={1}>
                    <div className="menu-item">
                          <span style={{width:"40%"}}>
                              <Icon type="exclamation-circle-o" className="header-menu-icon"/>
                          </span>
                          <span style={{width:"60%",paddingLeft:"10%",color:'#fcfcfc',fontWeight:"bold"}}>
                            关于
                          </span>
                    </div>
                  </Col> */}
                  {/* <Col span={1}>
                    <div className="menu-item">
                          <span style={{width:"40%"}}>
                              <Icon type="logout" className="header-menu-icon"/>
                          </span>
                          <span style={{width:"60%",paddingLeft:"10%",color:'#fcfcfc',fontWeight:"bold"}}>
                            退出
                          </span>
                    </div>
                  </Col> */}

                  <Col span={1}>
                    <div className="menu-item">
                        {
                            this.state.isFullScreen ?
                            <Icon
                              onClick={this.exitScreen.bind( this )}
                              className="header-menu-icon"
                              type="shrink"
                            /> :
                            <Icon
                              onClick={this.fullScreen.bind( this )}
                              className="header-menu-icon"
                              type="arrows-alt"
                            />
                        }
                    </div>
                  </Col>
              </Row>
            </Header>
        );
    }
}
THeader.propTypes = {

};
