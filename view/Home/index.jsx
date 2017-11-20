import React, {PropTypes, Component} from 'react';
import {Form} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.less'
import Banner from './Banner';
import Hot from './Hot';


const FormItem = Form.Item;


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {
        return (
            <div className="home-box">
                <Banner/>
                <Hot/>
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