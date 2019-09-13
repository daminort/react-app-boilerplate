import { createSelector } from 'reselect';

const UI = ({ App }) => App.UI;

export const selectUI = createSelector(
	[UI],
	(UI) => UI,
);
