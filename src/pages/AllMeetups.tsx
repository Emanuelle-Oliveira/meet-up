import MeetupList from '../components/meetups/meetupList/MeetupList';
import {Meetup} from '../types/Meetup';
import {useEffect, useState} from 'react';

/*const DUMMY_DATA: Meetup[] = [
  {
    //id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    //id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];*/

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  // - GET
  // fetch retorna uma promisse
  // .json() retorna uma promisse
  // - useState não pode ser usado pois faz a requisição o tempo inteiro = loop
  // - useEffect: só é executado uma vez quando o componente é chamado ou em determinadas condições
  // 1º argumento: função executada
  // 2º argumento: array de dependências -> função é executada quando ocorre uma mudança nessas dependências
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-start-63905-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      // data é um objeto e precisa ser convertido para array
      const meetups: Meetup[] = [];

      for(const key in data) { // key = IDs randomicos gerados pelo firebase
        const meetup: Meetup = {
          id: key,
          ...data[key] // espalhada os outros atributos
        };
        meetups.push(meetup);
      }

      setIsLoading(false); // Quando os dados chegando o estado muda para isLoading = false
      setLoadedMeetups(meetups); // Seta os meetups carregados como data
    });
  }, []);
  
  if(isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
      {/*
      Sem componentização da lista e item:
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return (
            <li key={meetup.id}>
              {meetup.title}
            </li>
          );
        })}
      </ul>
      */}
    </section>
  );
}