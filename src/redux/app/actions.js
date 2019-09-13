import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[App]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	APP_START: `${prefix} start`,
	UI_MERGE: `${prefix} ui-merge`,
};

const actions = {
	...TYPES,
	appStart: makeActionCreator(TYPES.APP_START),
	uiMerge: makeActionCreator(TYPES.UI_MERGE, 'UI'),
};

export default actions;
export { actions as appActions };
