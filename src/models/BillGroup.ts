import { Moment } from 'moment';
import { Activity } from './Activity';

export interface BillGroup {
  id: string;
  name: string;
  created: Moment;
  currency: string;
  activities: Activity[];
}
