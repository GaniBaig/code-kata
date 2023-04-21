import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';
import Theme from './styles/theme';

const App = () => {
  return (
      <Theme>
        <Header/>
        <Body/>
      </Theme>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
