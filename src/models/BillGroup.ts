import { Moment } from 'moment';
import Activity from './Activity';

export default interface BillGroup {
  id: string;
  name: string;
  created: Moment;
  currency: string;
  activities: Activity[];
}
