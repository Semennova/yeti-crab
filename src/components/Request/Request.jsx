import React from 'react';
import style from './Request.module.css'

export const Request = ({request, requests, setRequests, editRequest}) => {

    const deleteRequest = (number) => {
        setRequests(requests.filter(request => request.number !== number))
      }
    return (
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
            <button onClick={()=>editRequest(request)} className={style.editBtn}>edit</button>
        </td>
        
        <td>
            <button className={style.deleteBtn} onClick={()=> {deleteRequest(request.number)}}>x</button>
        </td>
   </>
    )
}
