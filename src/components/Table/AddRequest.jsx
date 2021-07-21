import React from 'react'

export const AddRequest = ({request, onChange, addRequest, loading, message, telError, emailError}) => {
      
    return (
        
    <div className='requestForm'>
        <form onSubmit={addRequest}>
            <h3>Добавить заявку:</h3>
            <input name='carrier' type='text' placeholder='* Компания' value={request.carrier} onChange={onChange}/>

            <input name='name' type='text' placeholder='* Контактное лицо' value={request.name} onChange={onChange}/>

            <input name='telephone' type='tel' placeholder='* 8хх-ххх-ххххх' value={request.telephone} onChange={onChange}/>

            <input name='email' type='text' placeholder='* Email' value={request.email} onChange={onChange}/>

            <input name='site' type='text' placeholder='Сайт' value={request.site} onChange={onChange} />

            <textarea name='comment' type='text' placeholder='Комментарий...' value={request.comment} onChange={onChange}/>
            
            <button disabled={loading} className='addBtn'>{loading ? 'Загрузка' : 'Добавить'}</button>
            
            {message && <div className="msgRed"><i>Необходимо заполнить все поля со звездочкой!</i></div>}

            {telError && <div className='validationError'>Неверный формат телефона</div>}

            {emailError && <div className='validationError'>Email в неверном формате, используйте значения до и после "@"</div>}
        </form>
    </div>
    )
}
