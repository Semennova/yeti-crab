import React, { useState } from 'react';
import style from './AddRequest.module.css'

export const AddRequest = ({requests, setRequests}) => {

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
 
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState(false);
      const [telError, setTelError] = useState(false);
      const [emailError, setEmailError] = useState(false);
      
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
      
      
    return (
        
    <div className={style.requestForm}>
        <form onSubmit={addRequest}>
            <h3>Добавить заявку:</h3>
            <input name='carrier' type='text' placeholder='* Компания' value={request.carrier} onChange={onChange}/>

            <input name='name' type='text' placeholder='* Контактное лицо' value={request.name} onChange={onChange}/>

            <input name='telephone' type='tel' placeholder='* 8хх-ххх-ххххх' value={request.telephone} onChange={onChange}/>

            <input name='email' type='text' placeholder='* Email' value={request.email} onChange={onChange}/>

            <input name='site' type='text' placeholder='Сайт' value={request.site} onChange={onChange} />

            <textarea name='comment' type='text' placeholder='Комментарий...' value={request.comment} onChange={onChange}/>
            
            <button disabled={loading} className={style.addBtn}>{loading ? 'Загрузка' : 'Добавить'}</button>
            
            {message && <div className={style.msgRed}><i>Необходимо заполнить все поля со звездочкой!</i></div>}

            {telError && <div className={style.validationError}>Неверный формат телефона</div>}

            {emailError && <div className={style.validationError}>Email в неверном формате, используйте значения до и после "@"</div>}
        </form>
    </div>
    )
}
