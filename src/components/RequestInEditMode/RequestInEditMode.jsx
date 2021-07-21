import React, { useState } from 'react';
import style from './RequestInEditMode.module.css'

export const RequestInEditMode = ({request, saveChanges, setCarrierVal, setNameVal, setTelephoneVal, setEmailVal, setSiteVal, setCommentVal}) => {

    return (
        <>
        <td>{request.number}</td>
        <td>{request.date}</td>
        <td><input type='text' name='carrier' defaultValue={request.carrier} onChange={(e)=>setCarrierVal(e.target.value)}/></td>
        <td><input type='text' name='name' defaultValue={request.name} onChange={(e)=>setNameVal(e.target.value)} /></td>
        <td><input type='tel' name='telephone' defaultValue={request.telephone} onChange={(e)=>setTelephoneVal(e.target.value)} /></td>
        <td><input type='email' name='email' defaultValue={request.email} onChange={(e)=>setEmailVal(e.target.value)} /></td>
        <td><input type='text' name='site' defaultValue={request.site}  onChange={(e)=>setSiteVal(e.target.value)} /></td> 
        <td><input type='text' name='comment'  defaultValue={request.comment}  onChange={(e)=>setCommentVal(e.target.value)} /></td>

       <td><button className={style.saveBtn} onClick={()=>saveChanges(request.number)}>Сохранить</button></td>

   </>
    )
}


