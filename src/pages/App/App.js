import { useState } from 'react';
import Header from '../../components/Header/Header.jsx'

function App() {

  const [baseUrl, setUrl] = useState('http://www.omdbapi.com/?')
  const [apikey, setkey] = useState('apikey=' + cb3ee742)
  const [query, setquery] = useState('&t=')
  const [searchTitle, setTitle] = useState('')
  const [searchUrl, setUrl] = useState('')

  return (
    <div className="App">
      <Header />
      <p>Hello</p>
    </div>
  );
}

export default App;
