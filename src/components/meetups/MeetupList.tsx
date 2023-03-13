import styles from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
import {Meetup} from '../../types/Meetup';

interface MeetupListProps {
  meetups: Meetup[]
}

export default function MeetupList(props: MeetupListProps) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) =>
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          //meetup = {meetup} -> desestruturar no MeetupItem
        />
      )}
    </ul>
  );
}