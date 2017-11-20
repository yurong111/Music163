import React, {PropTypes, Component} from 'react';
import {Form, Menu, Icon} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './index.less'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home',
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        let menuList = [
            {key: 'new', name: '新碟上架', url: '/new'},
            {key: 'singer', name: '歌手', url: '/singer'},
            {key: 'radio', name: '主播电台', url: '/radio'},
            {key: 'list', name: '歌单', url: '/list'},
            {key: 'sort', name: '排行榜', url: '/sort'},
            {key: 'home', name: '首页', url: '/'},
        ]

        return (
            <div className="header-box">
                <div className="title">MINI 网易云</div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {
                        menuList.map((item, i)=> {
                            return(
                                <Menu.Item key={item.key}>
                                    <Link to={item.url}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }

                </Menu>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Index));