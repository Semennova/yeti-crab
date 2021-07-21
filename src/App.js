import React, { useState, useEffect } from 'react';
import './App.css';
import { TableHead } from './components/Table/TableHead';
import { AddRequest } from './components/Table/AddRequest'

function App() {
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
const [requests, setRequests] = useState([]);
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState(false);
const [telError, setTelError] = useState(false);
const [emailError, setEmailError] = useState(false)

useEffect(()=> {
  let data = localStorage.getItem('requests');
  if(data){
    setRequests(JSON.parse(data))
  }
}, [])

useEffect(()=> {
  localStorage.setItem('requests', JSON.stringify(requests))
})


const onChange = (e) => {
  setRequest({
    ...request, 
    [e.target.name]: e.target.value
  })
}

const validTel = new RegExp(
  '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
)

const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
)


const addRequest = (e) => {
  e.preventDefault();
  if(!request.carrier || !request.telephone || !request.name){
    setMessage(true)
    setTimeout(()=>setMessage(false), 3000)
  } else if(!validTel.test(request.telephone)) {
    setTelError(true);
    setTimeout(()=>  setTelError(false), 3000)
  } else if (!validEmail.test(request.email)){
    setEmailError(true);
    setTimeout(()=> setEmailError(false), 3000)
  } else {
    setLoading(true);
    const newRequest ={
      ...request,
      number: Math.floor(Math.random() * 100000000),
      date: new Date().toLocaleString()
    };
  
    setRequests([newRequest, ...requests]);
  
    setRequest({
      carrier: '',
      name: '',
      telephone: '',
      email:'',
      site: '',
      comment: ''
    
    })
    setLoading(false)
    }
  }

const deleteRequest = (number) => {
  setRequests(requests.filter(request => request.number !== number))
}

  return (
    <div className='container'>
      <TableHead setRequests={setRequests} request={request} requests={requests} deleteRequest={deleteRequest} setRequest={setRequest}/>
      <AddRequest emailError={emailError} telError={telError} message={message} request={request} onChange={onChange} addRequest={addRequest} loading={loading}/>
    </div>
  );
}

export default App;
