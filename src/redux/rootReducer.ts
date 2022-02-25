import { combineReducers } from 'redux';
import resource from './resource/reducer';

const rootReducer = combineReducers({
    resource,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
