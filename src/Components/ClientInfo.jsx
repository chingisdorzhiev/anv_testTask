import React from 'react'
import { useParams } from 'react-router-dom';

export default function ClientInfo() {
  const { id } = useParams();
  const clients = JSON.parse(localStorage.getItem('clients'));
  const data = clients.find(el => el.id === +id);

  return (
    <>
      {data
        ? (
          <div>
            "id": {data.id},
            "fullname": {data.fullname},
            "created_at": {data.created_at},
            "phone": {data.phone},
            "region": {data.region},
            "status": {data.status}
          </div>
        )
        : (
        <div>
          Ошибка: Клиент с id {id} не найден.
        </div>
        )}
    </>
  )
}
