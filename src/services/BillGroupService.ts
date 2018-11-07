import moment from 'moment';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ActivityType } from '../domain/ActivityType';
import { BillGroup } from '../domain/BillGroup';

export default {
  load: (billGroupId: string): Observable<BillGroup> => {
    if (billGroupId === 'error') {
      return throwError({ message: 'Unable to load nobt.' });
    }

    const mockedBillGroup: BillGroup = {
      id: billGroupId,
      name: 'Grillen bei David',
      created: moment(),
      currency: 'EUR',
      activities: [
        {
          date: moment(),
          sum: 15,
          type: ActivityType.Bill,
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
          type: ActivityType.Payment,
          sum: 15,
          from: [{ name: 'David', amount: 15 }],
          to: [{ name: 'Mara', amount: 15 }],
        },
        {
          date: moment(),
          type: ActivityType.Bill,
          name: 'Grillfleisch Billa',
          sum: 32.5,
          from: [{ name: 'David', amount: 15 }, { name: 'Mara', amount: 17.5 }],
          to: [
            { name: 'Mara', amount: 10 },
            { name: 'David', amount: 16.25 },
            { name: 'Fred', amount: 6.25 },
          ],
        },
        {
          date: moment(),
          type: ActivityType.Bill,
          name: 'Bierchen',
          sum: 15,
          from: [{ name: 'David', amount: 15 }],
          to: [{ name: 'Hans', amount: 7.5 }, { name: 'David', amount: 7.5 }],
        },
      ],
    };

    return of(mockedBillGroup).pipe(delay(1000));
  },
};