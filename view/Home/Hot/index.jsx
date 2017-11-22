import React, {PropTypes, Component} from 'react';
import {Route} from 'react-router-dom'
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
import {searchAction} from '../../../store/module/Home/action'
// import Bundle from '../../../component/Bundle/index'
// import Artist from 'bundle-loader?lazy&name=app-[name]!../../Artist'

const FormItem = Form.Item;


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    componentWillMount() {
        let artists = ['艾薇儿', '周杰伦', '理查德.克莱德曼', '久石譲', '赵海洋'];
        artists.map((item)=> {
            this.props.dispatch(searchAction(item));
        })
    }

    componentWillReceiveProps(nextProps) {

    }

    getArtistById = () => {
        
    }

    render() {
        let list = [
            {name: 'Avril Lavigne', src: img5},
            {name: '理查德 克莱德曼', src: img3},
            {name: '久石让', src: img1},
            {name: '赵海洋', src: img2},
            {name: '周杰伦', src: img4},
        ]
        let {artists} = this.props;

        return (
            <div className="hot-box">
                <Title val="热门"/>

                <div>
                    {
                        artists && artists.map((item, i) => {
                            return (
                                <div className="card" key={i}>
                                    {
                                        item.result && item.result.artists && item.result.artists[0] &&
                                        <Card onClick={this.getArtistById.bind(this, item.result.artists[0].id)}>
                                            <div className="c-img" style={{backgroundImage: `url(${item.result.artists[0].picUrl})`}}>
                                            </div>
                                            <div className="c-word">
                                                {item.result.artists[0].name}
                                            </div>
                                        </Card>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                {/*<Route path="/" component={HomeContainer}/>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    let {home} = state;
    return {
        artists: home.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // apiGetList: bindActionCreators(apiGetList, dispatch),
    }
}

export default connect(mapStateToProps)(Form.create({})(Index));
// export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Index));