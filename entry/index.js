
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import "babel-polyfill";
// require('babel-polyfill');

const middleware = [thunk];
import toduReducer from '../store/reducer.jsx';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;    /*redux在浏览器查看*/

const store = createStore(toduReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)  /*中间件，处理接口异步调用*/
));

/*let store = createStore(
    toduReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);*/

/*按需加载*/
import Home from 'bundle-loader?lazy&name=app-[name]!../view/Home'
import Artist from 'bundle-loader?lazy&name=app-[name]!../view/Artist'
import Header from '../component/Header'

import Bundle from '../component/Bundle/index'
import './index.less'

const HomeContainer = (props) => (
    <Bundle load={Home}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)
const ArtistContainer = (props) => (
    <Bundle load={Artist}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)


class InitLayout extends React.Component {

    render() {
        return (
            <div className="entry-box">
                <Header/>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/artist/:id" component={ArtistContainer}/>
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

