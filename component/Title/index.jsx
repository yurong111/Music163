import React, {PropTypes, Component} from 'react';
import {Form} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.less'
const FormItem = Form.Item;


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    static defaultProps = {
        val: '热门推荐'
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {
        return (
            <div className="Title-box">
                <div className="title">{this.props.val}</div>
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