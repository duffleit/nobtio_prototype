import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export default {
  loadBillGroup: id => {
    if (id === 'error') {
      return throwError({ message: 'Unable to load nobt.' });
    }

    return of({ id: id }).pipe(delay(1000));
  },
};
