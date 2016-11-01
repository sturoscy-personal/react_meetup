const url = `${window.location.origin}/api`;

const requestEvents = () => {
    return { type: 'REQUEST_EVENTS' }
}

const receiveEvents = (events=null) => {
    return {
        type: 'RECEIVE_EVENTS',
        events: events
    }
}

export const getEvents = () => {
    return (dispatch) => {
        dispatch(requestEvents());
        $.get(`${url}/events/`)
        .done(events => {
            dispatch(receiveEvents(events));
        });
    }
}

const receiveEvent = (eventID) => {
    return {
        type: 'RECEIVE_EVENT',
        eventID: eventID
    }
}

export const getEvent = (eventID=null) => {
    return (dispatch, getState) => {
        if (!getState().events.results.length) {
            dispatch(requestEvents());
            $.get(`${url}/events/`)
            .done(events => {
                dispatch(receiveEvents(events));
                dispatch(receiveEvent(eventID));
            });
        } else {
            dispatch(receiveEvent(eventID));
        }
    }
}
