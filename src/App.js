import React, { useState } from 'react';
import './App.css';
import { RequestList } from './components/RequestList/RequestList';
import { AddRequest } from './components/AddRequest/AddRequest';


function App() {

const [requests, setRequests] = useState([]);
const [request, setRequest] = useState({
  number: '',
  date: '',
  carrier: '',
  name: '',
  telephone: '',
  email: '',
  site: '',
  comment: ''
 
});


  return (
    <div className='container'>
      <RequestList requests={requests} setRequests={setRequests}/>
      <AddRequest requests={requests} setRequests={setRequests} request={request} setRequest={setRequest}/>
    </div>
  );
}

export default App;
