import React, { useState, useEffect } from 'react';
import { RequestsHeader } from '../RequestsHeader/RequestsHeader'
import { Request } from '../Request/Request';
import { RequestInEditMode } from '../RequestInEditMode/RequestInEditMode';
import style from './RequestList.module.css'

export const RequestList = ({requests, setRequests}) => {

  const [edit, setEdit] = useState(null);
 
  const [carrierVal, setCarrierVal] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [telephoneVal, setTelephoneVal] = useState('');
  const [siteVal, setSiteVal] = useState('');
  const [commentVal, setCommentVal] = useState('');
  const [emailVal, setEmailVal] = useState('');

useEffect(()=> {
  let data = localStorage.getItem('requests');
  if(data){
    setRequests(JSON.parse(data))
  }
}, [])

useEffect(()=> {
  localStorage.setItem('requests', JSON.stringify(requests))
})


  const editRequest = (request) => {  
      setEdit(request.number);
      setCarrierVal(request.carrier)
      setNameVal(request.name)
      setTelephoneVal(request.telephone)
      setEmailVal(request.email)
      setSiteVal(request.site)
      setCommentVal(request.comment)
  }

  const saveChanges = (number) => {
    let newRequestsArr = [...requests].map(request => {
        if(request.number === number){
            request.carrier = carrierVal
            request.name = nameVal
            request.telephone = telephoneVal
            request.email = emailVal
            request.site = siteVal
            request.comment = commentVal 
        }
        return request
    })
    setRequests(newRequestsArr);
    setEdit(null)
}


    return (
 
      <table className={style.table}>
        <tbody>

        <RequestsHeader />
        {requests.map(request => (
            <tr key={request.number} className={style.tableBody}>
               {edit === request.number ? 

               <RequestInEditMode request={request}
                                  requests={requests}
                                  setRequests={setRequests}
                                  setEdit={setEdit}
                                  saveChanges={saveChanges}
                                  setRequests={setRequests}
                                  editRequest={editRequest}
                                  setCarrierVal={setCarrierVal}
                                  setNameVal={setNameVal}
                                  setTelephoneVal={setTelephoneVal}
                                  setEmailVal={setEmailVal}
                                  setSiteVal={setSiteVal}
                                  setCommentVal={setCommentVal}
                />
               :
               <Request request={request} 
                        requests={requests}
                        editRequest={editRequest}
                        setRequests={setRequests}
                        />
            }
            </tr>
      ))}
        </tbody>
    </table>

    )
}
