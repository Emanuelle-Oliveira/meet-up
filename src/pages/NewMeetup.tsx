import NewMeetupForm from '../components/meetups/newMeetupForm/NewMeetupForm';
import {Meetup} from '../types/Meetup';
import {useNavigate} from 'react-router-dom';

export default function NewMeetupPage() {

  const navigate = useNavigate();

  // Enviar requisição
  function addMeetupHandler(meetupData: Meetup) {
    // Api do firebase
    // Coleção meetups
    fetch(
      'https://react-getting-start-63905-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}