import React, { useEffect, useState } from 'react'
import styles from './MainStyles.module.css'
import Table from './Table/Table'
import mockClients from './../../ServerSide/clients.json'
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../Store/ClientsSlice';

export default function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const clients = useSelector(state => state.clients.arr) || [];
  localStorage.setItem('clients', JSON.stringify(clients));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await new Promise(resolve => {
          setTimeout(() => resolve(mockClients), 1000);
        });
        dispatch(getClients(data));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);

  return (
    <div className={styles.main}>
      {loading ? 'Loading...' : <Table clients={clients} />}
    </div>
  )
}
