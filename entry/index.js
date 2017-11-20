
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import toduReducer from '../store/reducer.jsx'
let store = createStore(toduReducer);

import Home from 'bundle-loader?lazy&name=app-[name]!../view/Home'
import Header from '../component/Header'

import Bundle from '../component/Bundle/index'
import './index.less'

const HomeContainer = (props) => (
    <Bundle load={Home}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)


class InitLayout extends React.Component {

    render() {
        return (
            <div className="entry-box">
                <Header/>
                <Route exact path="/" component={HomeContainer}/>
            </div>
        )
    }
}

const App = () =>
    <BrowserRouter>
        <Provider store={store}>
            <InitLayout />
        </Provider>
    </BrowserRouter>;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

