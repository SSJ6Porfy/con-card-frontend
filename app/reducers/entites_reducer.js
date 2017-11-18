import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import contributionsReducer from './contributions_reducer';
import campaignsReducer from './campaigns_reducer';

const entitiesReducer = combineReducers({
    events: eventsReducer,
    contributions: contributionsReducer,
    campaigns: campaignsReducer
});

export default entitiesReducer;