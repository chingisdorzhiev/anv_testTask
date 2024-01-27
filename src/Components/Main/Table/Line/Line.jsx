import React, { useState } from 'react'
import styles from './LineStyles.module.css'
import ClientInfoLink from './ClientInfoLink';
import { useDispatch } from 'react-redux';
import { addClient, deleteClient, editClient} from '../../../../Store/ClientsSlice';
import { formatDate } from '../../../../API/FormatDate';

export default function Line({fullname, created_at, phone, region, status, newUser, lastId, id, ...props}) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const initialState = {
    id: id || (lastId + 1),
    fullname: fullname || '',
    created_at: created_at || new Date(),
    phone: phone || '',
    region: region || '',
    status: status || 'Активен'
  }

  const [userData, setUserData] = useState(initialState);

  const handleInputChange = (field, value) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleEnterPress = (id, userData) => {
    if (newUser) {
      dispatch(addClient(userData));
      setUserData({
        id: lastId + 1,
        fullname: '',
        created_at: new Date(),
        phone: '',
        region: '',
        status: 'Активен'
      });
    }
    if (editMode) {
      dispatch(editClient({id, userData}))
      setEditMode(!editMode)
    }
  };

  const handleDeleteClient = (id) => {
    dispatch(deleteClient(id));
  };

  const handleEditMode = (e) => {
    setEditMode(editMode => !editMode)
  }

  return (
    <tr className={styles.line}>
      <td className={`${styles.column} ${styles.name}`}>
        {(newUser || editMode)
        ? (
          <input
            type="text"
            value={userData.fullname}
            onChange={(e) => handleInputChange('fullname', e.target.value)}
            placeholder='Введите ФИО'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEnterPress(id, userData)
              }
            }}
          />
        )
        : (
          <ClientInfoLink
            fullname={fullname}
            id={id}
          />
        )}
      </td>
      <td className={styles.column}>
        {(newUser || editMode)
        ? (
          <input
            type="date"
            value={formatDate(userData.created_at)}
            onChange={(e) => handleInputChange('created_at', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEnterPress(id, userData)
              }
            }}
          />
        )
        : (
          formatDate(created_at)
        )}
      </td>
      <td className={styles.column}>
        {(newUser || editMode)
        ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder='Введите телефон'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEnterPress(id, userData)
              }
            }}
          />
        )
        : (
          phone
        )}
      </td>
      <td className={styles.column}>
        {(newUser || editMode)
        ? (
          <input
            type="text"
            value={userData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            placeholder='Введите город'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEnterPress(id, userData)
              }
            }}
          />
        )
        : (
          region
        )}
      </td>
      <td className={styles.column}>
        {(newUser || editMode)
        ? (
          <select
            value={userData.status}
            onChange={(e) => handleInputChange('status', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEnterPress(id, userData)
              }
            }}
            >
            <option value="">Выберите статус</option>
            <option value="Активен">Активен</option>
            <option value="Неактивен">Неактивен</option>
            <option value="Приостановлен">Приостановлен</option>
        </select>
        )
        : (
          status
        )}
      </td>
      <td className={styles.delete_edit}>
        {(newUser || editMode)
          ? null
          : (
            <button onClick={(e) => handleDeleteClient(id)}>
              delete
            </button>
        )}
        {(!newUser)
          ? <button onClick={handleEditMode}>
              edit
            </button>
          : null
          }
      </td>
    </tr>
  );
}