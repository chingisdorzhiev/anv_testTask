import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LinkStyles.module.css'

export default function ClientInfoLink({ fullname, id }) {
    return (
        <>
            <Link className={styles.link} to={`/client/${id}`} target="_blank">
                {fullname}
            </Link>
        </>
    );
}
