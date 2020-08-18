import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

(async () => {
  const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
  const res = await fetch(url);

  if (res.ok) {
    const pet = await res.json();

    ReactDOM.render(
      <React.StrictMode>
        <App pet={pet} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})();