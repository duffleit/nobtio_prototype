import { createSelector } from 'reselect';

const sum = (sum, v) => sum + v;
const flatArray = (array, v) => [...v, ...array];
const isNoDuplicate = (item, pos, self) => self.indexOf(item) === pos;

const utils = {
  transaction: {
    sum: t => t.from.map(f => f.amount).reduce(sum, 0),
    persons: t => [...t.from.map(f => f.name), ...t.to.map(f => f.name)],
  },
};

const getBills = state => state.transactions.filter(t => t.type === 'bill');

export const getPersonsInvolvedInBills = createSelector([getBills], bills => {
  return bills
    .map(utils.transaction.persons)
    .reduce(flatArray, [])
    .filter(isNoDuplicate);
});

export const getTotalAmountOfBills = createSelector([getBills], bills => {
  return bills.map(utils.transaction.sum).reduce(sum, 0);
});
