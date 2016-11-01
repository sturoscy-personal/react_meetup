import React from 'react';
import { connect } from 'react-redux';

import { getEvent } from '../redux/actions/events';

import '../stylesheets/event.scss';

class Event extends React.Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(getEvent(this.props.params.eventID));
    }
    render() {
        return (
            <div className="event">
                <h3>Name</h3>
                <p id="name">{this.props.meetupEvent.name}</p>
                <h3>Description</h3>
                <div
                    id="description"
                    dangerouslySetInnerHTML={{__html: this.props.meetupEvent.description}}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { meetupEvent: state.events.meetupEvent }
}

export default connect(mapStateToProps)(Event);
