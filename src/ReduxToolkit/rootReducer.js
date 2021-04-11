import {combineReducers} from "redux";
import channelReducer from './channelSlice';
import channelNameReducer from './channelName';
import textMessagesReducer from './textMessages';

 const rootReducer=combineReducers({
	channels:channelReducer,
	channelName:channelNameReducer,
	textMessages:textMessagesReducer

})
 export default rootReducer;