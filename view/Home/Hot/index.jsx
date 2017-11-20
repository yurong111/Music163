import React, {PropTypes, Component} from 'react';
import {Form, Card} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import img1 from './images/02.png'
import img2 from './images/04.png'
import img3 from './images/05.png'
import img4 from './images/06.png'
import img5 from './images/07.png'
import Title from '../../../component/Title'
import './index.less'

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
        let list = [
            {type: 'chinese', name: '华语', src: img1},
            {type: 'popular', name: '流行', src: img2},
            {type: 'rock', name: '摇滚', src: img3},
            {type: 'ballad', name: '民谣', src: img4},
            {type: 'electron', name: '电子', src: img5},
            {type: 'electron2', name: '电子2', src: img5},
        ]

        return (
            <div className="hot-box">
                <Title val="热门"/>

                <div>
                    {
                        list.map((item, i) => {
                            return (
                                <Card key={i}>
                                    <div className="c-img" style={{backgroundImage: `url(${item.src})`}}>
                                    </div>
                                    <div className="c-word">
                                        {item.name}
                                    </div>
                                </Card>
                            )
                        })
                    }

                </div>
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