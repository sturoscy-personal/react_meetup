// Main Imports
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

// Routing Components
import App from './components/App.jsx';
import Events from './components/Events.jsx';
import Event from './components/Event.jsx';
import Home from './components/Home.jsx';

// Redux Functions
import { applyMiddleware, createStore } from 'redux';

// Redux Middleware
import ReduxThunk from 'redux-thunk';

// Root Reducer for Redux Store
import rootReducer from './redux/reducers/index';

// Initial State
let initialState = {
    events: {
        isLoading: false,
        meetupEvent: {
            // created: null,
            // description: null,
            // duration: null,
            // group: {},
            // id: null,
            // link: null,
            // name: null,
            // rsvp_limit: null,
            // status: null,
            // time: null,
            // updated: null,
            // utc_offset: null,
            // venue: {},
            // visibility: null,
            // waitlist_count: null,
            // yes_rsvp_null: null
        },
        results: []
    }
};

const configureStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
)

const history = syncHistoryWithStore(hashHistory, configureStore);

render((
    <Provider store={configureStore}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='/events' component={Events}>
                    <Route path='/events/:eventID' component={Event} />
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('wrapper'))
