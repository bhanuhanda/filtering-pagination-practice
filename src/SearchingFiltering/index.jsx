import React, { useState, useEffect } from 'react'
import { Table, Input, Checkbox, Typography } from 'antd'

const CheckboxGroup = Checkbox.Group;
const { Title } = Typography;

const FilterTableData = () => {
    const [users, setUsers] = useState([])
    const [searchString, setSearchString] = useState('')
    const [filterColumns, setFilterColumns] = useState(['Name'])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data.slice(0,5)))
    }, [])

    let [columns, setColumns] = useState([]);
    let [data, setData] = useState([]);

    const createTitle = (title) => title.slice(0,1).toUpperCase() + title.slice(1); 

    useEffect(() => {
        if(users.length > 0) {
            const columnSet = Object.keys(users[0]);
            let cols = [];
            for(let col in columnSet) {
                const colObj = {
                    title: createTitle(columnSet[col].toString()),
                    dataIndex: columnSet[col],
                    key: columnSet[col]
                };
                cols.push(colObj);
            }
            setColumns(cols);

            const fixedData = users.map((user) => ({
                ...user,
                key: user.id,
                address: user.address.city,
                company: user.company.name,
            }))
            setData(fixedData)
        }
    }, [users])

    const filteredData = (rows) => {
        if(filterColumns.length > 0) {
            const cols = filterColumns.map((col) => col.toString().toLowerCase());
            return rows.filter((row) => (
                cols.some((col) => (
                    row[col].toString().toLowerCase().indexOf(searchString.toLowerCase()) > -1
                ))
            ))
        }
        const cols = columns.length > 0 && columns.map((col) => col.key);
        return rows.filter((row) => (
            cols.some((col) => (
                row[col].toString().toLowerCase().indexOf(searchString.toLowerCase()) > -1
            ))
        ))
    }; 

    return (
        <div align={'center'}>
            <Title mark>Searching & Filtering</Title>
            <div style={{width: '30rem'}}>
                <Input 
                    placeholder="Type to Search..." 
                    value={searchString} 
                    onChange={e => setSearchString(e.target.value)} 
                />
            </div>
            <div style={{padding: '1rem'}}>
                <CheckboxGroup 
                    options={columns.length > 0 && columns.map((col) => col.title)} 
                    value={filterColumns} 
                    onChange={list => setFilterColumns(list)} 
                />
            </div>
            {users.length > 0 && (
                <Table 
                    dataSource={filteredData(data)} 
                    columns={columns} 
                    pagination={false} 
                    // pagination={{position: ['bottomCenter']}} 
                />
            )}
        </div>
    )
}

export default FilterTableData

