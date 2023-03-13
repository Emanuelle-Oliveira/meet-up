import styles from './Layout.module.css';
import MainNavigation from './mainNavigation/MainNavigation';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation/>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}
