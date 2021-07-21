import React, { useState } from 'react';
import './App.css';
import { RequestList } from './components/RequestList/RequestList';
import { AddRequest } from './components/AddRequest/AddRequest';


function App() {

const [requests, setRequests] = useState([]);

  return (
    <div className='container'>
      <RequestList requests={requests} setRequests={setRequests}/>
      <AddRequest requests={requests} setRequests={setRequests}/>
    </div>
  );
}

export default App;
