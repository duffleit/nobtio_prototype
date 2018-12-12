import { Moment } from 'moment';
import ActivityType from './ActivityType';
import ActivityParticipation from './ActivityParticipation';

export default interface Activity {
  identifier: string;
  date: Moment;
  name?: string;
  sum: number;
  type: ActivityType;
  from: ActivityParticipation[];
  to: ActivityParticipation[];
}
