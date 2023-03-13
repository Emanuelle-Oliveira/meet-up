import styles from './Card.module.css';
import React from 'react';

interface CardProps {
  children: React.ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
  );
}