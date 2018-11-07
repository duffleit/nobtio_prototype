import { createSelector } from 'reselect';
import { Activity } from '../../domain/Activity';
import { State } from '../../store/state';

const sum = (aggregate: number, current: number): number => aggregate + current;
const flattenArray = (aggregate: any[], current: any[]): any[] => [...aggregate, ...current];
const isNoDuplicate = (item: any, pos: number, self: any): boolean => self.indexOf(item) === pos;

export const getActivities = (state: State): Activity[] =>
  (state.billGroup || { activities: [] }).activities;

const getBills = createSelector(
  [getActivities],
  (activities: Activity[]): Activity[] => {
    return activities.filter(t => t.type === 'bill');
  }
);

export const getPersonsInvolvedInBills = createSelector(
  [getBills],
  (bills: Activity[]): string[] => {
    const getPersons = (a: Activity) => [...a.from.map(f => f.name), ...a.to.map(f => f.name)];

    return bills
      .map(getPersons)
      .reduce(flattenArray, [])
      .filter(isNoDuplicate);
  }
);

export const getTotalAmountOfBills = createSelector(
  [getBills],
  (bills: Activity[]): number => {
    return bills.map(b => b.sum).reduce(sum, 0);
  }
);
