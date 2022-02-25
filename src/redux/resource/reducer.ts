/* eslint-disable @typescript-eslint/default-param-last */
import ActionType from './types';

const initialState: any = {};

const Resource = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ActionType.UPDATE_RESOURCE:
            return { ...state, ...action.data };
        case ActionType.UPDATE_CONFIG:
            return { ...state, ...action.data };
        default:
            return state;
    }
};

export default Resource;
