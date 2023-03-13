import Card from '../../ui/card/Card';
import styles from './NewMeetupForm.module.css';
import React from 'react';
// Hook que referencia um objeto/elemento do dom
// Nesse caso é usado para pegar os valores do forms
// Usado somente na leitura
import {useRef} from 'react';
import {Meetup} from '../../../types/Meetup';

export default function MewMeetupForm() {

  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);


  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Pega o valor atual do input title
    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          {/* htmlFor = for */}
          <label htmlFor="title"> Meetup Title </label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="image"> Meetup Image </label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="address"> Address </label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="description"> Description </label>
          <textarea required id="description" rows={5} ref={descriptionInputRef}/>
        </div>
        <div className={styles.actions}>
          <button> Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}