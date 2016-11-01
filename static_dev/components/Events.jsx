import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions
import { getEvents } from '../redux/actions/events';

class Events extends React.Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(getEvents());
    }
    render() {
        if (this.props.events.isLoading) {
            return <h1>Loading Events...</h1>
        }

        let events = this.props.events.results.map(event => {
            return <li key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></li>;
        });
        if (!events.length) { events = <li>No events found</li>; }

        return (
            <div>
                <h1>Events</h1>
                <ul>{events}</ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: { ...state.events }
    }
}

export default connect(mapStateToProps)(Events);
