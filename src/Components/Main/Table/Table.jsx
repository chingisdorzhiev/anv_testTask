import React, { useState } from 'react'
import styles from './TableStyles.module.css'
import Line from './Line/Line'
import { FaFilter } from 'react-icons/fa';

export default function Table({clients}) {
    const [filters, setFilters] = useState({
        fullname: '',
        region: '',
        status: '',
    });

    const [filtersVisibility, setFiltersVisibility] = useState({
        fullname: false,
        region: false,
        status: false,
    });

    const handleFilterChange = (filter, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
    };

    const toggleFilterVisibility = (filter) => {
        setFiltersVisibility((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
    };

    // const [fullnameFilter, setFullnameFilter] = useState('');
    // const [regionFilter, setRegionFilter] = useState('');
    // const [statusFilter, setStatusFilter] = useState('');
    
    // const [isNameFilterVisible, setNameFilterVisibility] = useState(false);
    // const [isRegionFilterVisible, setRegionFilterVisibility] = useState(false);
    // const [isStatusFilterVisible, setStatusFilterVisibility] = useState(false);
    
    // function toFiltName(e) {
    //     setFullnameFilter(e.target.value)
    // };

    // function toFiltRegion(e) {
    //     setRegionFilter(e.target.value)
    // };

    // function toFiltStatus(e) {
    //     setStatusFilter(e.target.value)
    // };

    // const toggleNameFilterVisibility = () => {
    //     setNameFilterVisibility((prevState) => !prevState);
    // };

    // const toggleRegionFilterVisibility = () => {
    //     setRegionFilterVisibility((prevState) => !prevState);
    // };

    // const toggleStatusFilterVisibility = () => {
    //     setStatusFilterVisibility((prevState) => !prevState);
    // };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>    
                <thead>
                    <tr>
                        <th className={styles.name}>
                            ФИО
                            <FaFilter
                                className={styles.filterIcon}
                                // onClick={toggleNameFilterVisibility}
                                onClick={() => toggleFilterVisibility('fullname')}
                            />
                            {/* {isNameFilterVisible && <input
                                type="text"
                                value={fullnameFilter}
                                onChange={toFiltName}
                                placeholder="Фильтр по имени"
                            />} */}
                            {filtersVisibility.fullname && (
                                <input
                                type="text"
                                value={filters.fullname}
                                onChange={(e) => handleFilterChange('fullname', e.target.value)}
                                placeholder="Фильтр по имени"
                                />
                            )}
                        </th>
                        <th>
                            Дата создания
                        </th>
                        <th>Телефон</th>
                        <th>
                            Город
                            <FaFilter
                                className={styles.filterIcon}
                                // onClick={toggleRegionFilterVisibility}
                                onClick={() => toggleFilterVisibility('region')}
                            />
                            
                            {/* {isRegionFilterVisible && <input
                                type="text"
                                value={regionFilter}
                                onChange={toFiltRegion}
                                placeholder="Фильтр по городу"
                            />} */}
                            {filtersVisibility.region && (
                                <input
                                type="text"
                                value={filters.region}
                                onChange={(e) => handleFilterChange('region', e.target.value)}
                                placeholder="Фильтр по городу"
                                />
                            )}
                        </th>
                        <th>
                            Статус
                            <FaFilter
                                className={styles.filterIcon}
                                // onClick={toggleStatusFilterVisibility}
                                onClick={() => toggleFilterVisibility('status')}
                            />
                            {/* {isStatusFilterVisible && <select
                                value={statusFilter}
                                onChange={toFiltStatus}
                                placeholder="Фильтр по статусу"
                                >
                                <option value="">Выберите статус</option>
                                <option value="Активен">Активен</option>
                                <option value="Неактивен">Неактивен</option>
                                <option value="Приостановлен">Приостановлен</option>
                            </select>} */}
                            {filtersVisibility.status && (
                                <select
                                value={filters.status}
                                onChange={(e) => handleFilterChange('status', e.target.value)}
                                placeholder="Фильтр по статусу"
                                >
                                <option value="">Выберите статус</option>
                                <option value="Активен">Активен</option>
                                <option value="Неактивен">Неактивен</option>
                                <option value="Приостановлен">Приостановлен</option>
                                </select>
                            )}
                        </th>
                        <th>Удалить / Редактировать</th>
                    </tr>
                </thead>
                <tbody>
                    {clients
                        // .filter(el => el.fullname.toLowerCase().includes(fullnameFilter.toLocaleLowerCase()))
                        // .filter(el => el.region.toLowerCase().includes(regionFilter.toLocaleLowerCase()))
                        // .filter(el => !statusFilter || el.status === statusFilter)
                        .filter((el) => el.fullname.toLowerCase().includes(filters.fullname.toLocaleLowerCase()))
                        .filter((el) => el.region.toLowerCase().includes(filters.region.toLocaleLowerCase()))
                        .filter((el) => !filters.status || el.status === filters.status)
                        .map((el, index) => (
                            <Line
                                key={index}
                                fullname={el.fullname}
                                created_at={el.created_at}
                                phone={el.phone}
                                region={el.region}
                                status={el.status}
                                id={el.id}
                            />
                        ))
                    }
                    <Line newUser={true} lastId={clients[clients.length - 1].id}></Line>
                </tbody>
            </table>
        </div>
    )
}
