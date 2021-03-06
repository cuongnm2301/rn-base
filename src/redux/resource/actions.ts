import ActionType from './types';

export const updateResource = (data: any): any => {
    return {
        type: ActionType.UPDATE_RESOURCE,
        data,
    };
};

export const updateConfig = (data: any): any => {
    return {
        type: ActionType.UPDATE_CONFIG,
        data,
    };
};

export const tempAction = null;
