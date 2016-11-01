import Immutable from 'immutable';

function setState (state, newState={}) {
    return state.merge(newState);
}

const events = (state, action) => {
    state = Immutable.fromJS(state) || Immutable.Map();
    switch (action.type) {
        case 'REQUEST_EVENTS':
            var newState = state.set('isLoading', true);
            state = setState(state, newState);
            return state.toJS();
        case 'RECEIVE_EVENTS':
            var events = Immutable.fromJS(action.events);
            var newState = state
                .set('isLoading', false)
                .set('results', events)

            state = setState(state, newState);
            return state.toJS();
        case 'RECEIVE_EVENT':
            var eventID = action.eventID;
            var events = state.get('results');
            var meetupEvent = events.find(meetupEvent => {
                return meetupEvent.get('id') === +eventID
            });

            var newState = state.set('meetupEvent', meetupEvent);

            state = setState(state, newState);
            return state.toJS();
        default:
            return state.toJS();
    }
}

export default events;
