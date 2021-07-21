import React from 'react';
import style from './RequestsHeader.module.css'

export const RequestsHeader = () => {
    return (
        <tr className={style.tableHeader}>
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
    )
}
