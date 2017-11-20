import React, {PropTypes, Component} from 'react';
import {Form} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
            <div>
                hello resume
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