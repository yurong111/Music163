
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

require('babel-polyfill');

const middleware = [thunk];
import toduReducer from '../store/reducer.jsx';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(toduReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));

/*let store = createStore(
    toduReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);*/

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

