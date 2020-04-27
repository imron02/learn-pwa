import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('http://127.0.0.1:3000').then(response => {
      response.json()
        .then(data => setStories(data))
        .catch(error => console.warn(error));
    }).catch(error => console.dir(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Top 10 Hacker News Stories</h1>
      </header>
      <main>
        <section>
          <ol>
            {stories.map(story => (
              <li>{story}</li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
