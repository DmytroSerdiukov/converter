import React from 'react'
import Header from './components/Header';
import Converter from './components/Converter';
import styles from './styles';

function App() {
  return (
    <div style={styles.container}>
     <Header />
     <Converter />
    </div>
  );

}

export default App;

