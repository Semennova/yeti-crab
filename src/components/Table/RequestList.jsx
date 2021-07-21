import React, { useState, useEffect } from 'react';


export const RequestList = ({requests, deleteRequest, request, setRequests, setRequest}) => {


    const [edit, setEdit] = useState(null);
 

    const [carrierVal, setCarrierVal] = useState('');
    const [nameVal, setNameVal] = useState('');
    const [telephoneVal, setTelephoneVal] = useState('');
    const [siteVal, setSiteVal] = useState('');
    const [commentVal, setCommentVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    
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
        <>
        {requests.map(request => (
            <tr key={request.number} className='tableBody'>
               {edit === request.number ? 
               <>
                    <td>{request.number}</td>
                    <td>{request.date}</td>
                    <td><input type='text' name='carrier' defaultValue={request.carrier} onChange={(e)=>setCarrierVal(e.target.value)}/></td>
                    <td><input type='text' name='name' defaultValue={request.name} onChange={(e)=>setNameVal(e.target.value)} /></td>
                    <td><input type='tel' name='telephone' defaultValue={request.telephone} onChange={(e)=>setTelephoneVal(e.target.value)} /></td>
                    <td><input type='email' name='email' defaultValue={request.email} onChange={(e)=>setEmailVal(e.target.value)} /></td>
                    <td><input type='text' name='site' defaultValue={request.site}  onChange={(e)=>setSiteVal(e.target.value)} /></td> 
                    <td><input type='text' name='comment'  defaultValue={request.comment}  onChange={(e)=>setCommentVal(e.target.value)} /></td>

                   <td><button className='saveBtn' onClick={()=>saveChanges(request.number)}>Сохранить</button></td>

               </>
               :
               <>
                    <td>{request.number}</td>
                    <td>{request.date}</td>
                    <td>{request.carrier}</td>
                    <td>{request.name} </td>
                    <td>{request.telephone}</td>
                    <td>{request.email}</td>
                    <td><a href={request.site} target='_blank' rel='noreferrer'>{request.site}</a></td>
                    <td>{request.comment}</td>

                    <td>
                        <button onClick={()=>editRequest(request)} className='editBtn'>edit</button>
                    </td>
                    
                    <td>
                        <button className='deleteBtn' onClick={()=> {deleteRequest(request.number)}}>x</button>
                    </td>
               </>
            }
            </tr>
      ))}
     </>
    )
}
