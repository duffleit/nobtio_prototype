import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import moment from 'moment';

export default {
  loadBillGroup: id => {
    if (id === 'error') {
      return throwError({ message: 'Unable to load nobt.' });
    }

    return of({
      id: id,
      name: 'Grillen bei David',
      created: moment(),
      currency: 'EUR',
      transactions: [
        {
          date: moment(),
          type: 'bill',
          name: 'Wein',
          from: [{ name: 'Fred', amount: 15 }],
          to: [
            { name: 'Mara', amount: 5 },
            { name: 'David', amount: 5 },
            { name: 'Fred', amount: 5 },
          ],
        },
        {
          date: moment(),
          type: 'payment',
          from: [{ name: 'David', amount: 15 }],
          to: [{ name: 'Mara', amount: 15 }],
        },
        {
          date: moment(),
          type: 'bill',
          name: 'Billa Fleisch',
          from: [{ name: 'David', amount: 15 }, { name: 'Mara', amount: 17.5 }],
          to: [
            { name: 'Mara', amount: 10 },
            { name: 'David', amount: 16.25 },
            { name: 'Fred', amount: 6.25 },
          ],
        },
        {
          date: moment(),
          type: 'bill',
          name: 'Bierchen',
          from: [{ name: 'David', amount: 15 }],
          to: [{ name: 'Hans', amount: 7.5 }, { name: 'David', amount: 7.5 }],
        },
      ],
    }).pipe(delay(1000));
  },
};
