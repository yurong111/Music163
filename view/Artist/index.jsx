import React, {PropTypes, Component} from 'react';
import {Form, Button, Table} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getArtistByIdAction} from '../../store/module/Home/action';
import './index.less'

const FormItem = Form.Item;


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        id && this.props.dispatch(getArtistByIdAction(id))
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {
        let {artist} = this.props;

        return (
            <div className="artist-box">
                {
                    artist &&
                    <div>
                        <div className="p1">
                            <div className="l">
                                <div>{artist.name}</div>
                                <div>{artist.briefDesc}</div>
                            </div>
                            <div className="r" style={{backgroundImage: `url(${artist.picUrl})`}}></div>
                        </div>
                        <div className="p2">
                            <Button>播放</Button>
                            <div>

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
        artist: home.getArtistByIdResult && home.getArtistByIdResult.artist
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps)(Form.create({})(Index));