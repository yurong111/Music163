import React, {PropTypes, Component} from 'react';
import {Form, Carousel} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.less'
import img1 from './images/01.png';
import img2 from './images/03.png';
import img3 from './images/08.png';

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
        let imgs = [img1, img2, img3];

        return (
            <div className="banner-box">
                <Carousel autoplay effect="fade">
                    {
                        imgs.map((item, i)=> {
                            return (
                                <div key={i}>
                                    <div className="b-img" style={{backgroundImage:`url(${item})`}}></div>
                                </div>
                            )
                        })
                    }
                </Carousel>
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