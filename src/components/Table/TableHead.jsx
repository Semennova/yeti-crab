import React, { useState } from 'react';
import { RequestList } from './TableFieldsCopy'


export const TableHead = ({db, requests, deleteRequest, request, setRequests, setRequest}) => {


    return (
      <>
      <table className="table">
        <tbody>
          <tr className='tableHeader'>
              <th>№ заявки</th>
              <th>Дата и время заявки</th>
              <th>Перевозчик</th>
              <th>ФИО сотрудника</th>
              <th>Телефон сотрудника</th>
              <th>Контактный Email</th>
              <th>Сайт перевозчика</th>
              <th>Комментарий</th>
              <th>Править заявку</th> 
              <th>Удалить заявку</th> 
          </tr>

      <RequestList setRequest={setRequest} setRequests={setRequests} requests={requests} deleteRequest={deleteRequest} request={request}/>
        </tbody>
    </table>
    </>
    )
}
