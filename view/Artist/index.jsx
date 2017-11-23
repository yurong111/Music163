import React, {PropTypes, Component} from 'react';
import {Form, Button, Row, Col} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getArtistByIdAction, getMusicAction} from '../../store/module/Home/action';
import './index.less'
import Title from '../../component/Title'

const FormItem = Form.Item;


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playId: null,
            nextIndex: 0,   /*用于播放所有标志当前播放index*/
            isPlayingAll: false,
        }

    }

    audio= null;
    ids = [];

    componentWillMount() {
        let id = this.props.match.params.id;
        id && this.props.dispatch(getArtistByIdAction(id));
    }

    componentDidMount() {
        // this.playAll();
    }

    componentWillUnmount() {
        console.log('componentWillUnMount');
        this.audio.pause();
    }

    /**
     * 全局播放，循环监听
     */
    playAll = () => {
        /*重置*/
        this.audio && this.audio.pause();
        this.audio = null;

        this.setState({
            playId: null,
            nextIndex: 0,
        }, () => {

            setInterval(()=>{
                if (!this.audio || this.audio.ended) {
                    this.playAllOne();
                }
            }, 200);
        })
    }

    /**
     * 全局播放其中一首
     */
    playAllOne = () => {
        let {nextIndex} = this.state;

        if (nextIndex > this.ids.length) {
            nextIndex = 0;
        }

        this.handlePlay(this.ids[nextIndex]);
        this.setState({
            nextIndex: ++nextIndex,
        });
    }

    /**
     * 处理播放
     * @param id
     */
    handlePlay = (id) => {
        this.handlePause(id);
        this.audio = new Audio(`http://music.163.com/song/media/outer/url?id=${id}.mp3`);
        this.audio.play();
    }

    /**
     * 处理暂停
     * @param id
     */
    handlePause = (id) => {
        this.audio && this.audio.pause();
        this.setState({
            playId: id,
        })
    }

    /**
     * 单曲播放
     * @param id
     */
    play = (id) => {
        if (this.state.playId == id) {  //重复点击，暂停
            this.handlePause();
        }else {
            this.handlePlay(id);        //播放
        }
    }

    /**
     * 保存id，用于播放
     * @param id1
     * @param id2
     */
    saveIds = (id1, id2) => {
        this.ids.push(id1);
        this.ids.push(id2);
    }


    getList = () => {
        let {hotSongs} = this.props;
        let {playId} = this.state;

        let list = [];
        for (let i=0; i<hotSongs.length; i=i+2) {
            this.saveIds(hotSongs[i].id, hotSongs[i+1].id);

            list.push(
                <Row key={i}>
                    <Col className="col" onClick={this.play.bind(this, hotSongs[i].id)}>
                        <i className={`${playId == hotSongs[i].id ? 'rotate': ''} iconfont icon-yinyue`}></i>
                        <div>{hotSongs[i].name}</div>
                    </Col>

                    <Col className="col" onClick={this.play.bind(this, hotSongs[i+1].id)}>
                        <i className={`${playId == hotSongs[i+1].id ? 'rotate': ''} iconfont icon-yinyue`}></i>
                        <div>{hotSongs[i+1].name}</div>
                    </Col>
                </Row>
            )
        }

        return list;
    }


    render() {
        let {artist} = this.props;
        let {isPlayingAll} = this.state;

        return (
            <div className="artist-box">
                {
                    artist &&
                    <div>
                        <div className="p1">
                            <div className="l">
                                <div>
                                    <span>{artist.name}</span>
                                    <i className={`${isPlayingAll ? 'pause' : 'play'} iconfont`} onClick={this.playAll}></i>
                                </div>
                                <div>{artist.briefDesc}</div>
                            </div>
                            <div className="r" style={{backgroundImage: `url(${artist.picUrl})`}}></div>
                        </div>
                        <div className="p2">
                            <Title val="播放列表"/>

                            <div>
                                {this.getList()}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {home} = state;
    return {
        artist: home.getArtistByIdResult && home.getArtistByIdResult.artist,
        hotSongs: home.getArtistByIdResult && home.getArtistByIdResult.hotSongs,

        getMusicResult: home.getMusicResult
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps)(Form.create({})(Index));