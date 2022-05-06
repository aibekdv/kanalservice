import React from 'react'

const TableItem = ({ item }) => {
    const { title, distance, count } = item
    const date = new Date(item.createdAt)
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    const year = String(date.getFullYear()).slice(2, 4)

    return (
        <tr>
            <th scope="row">{`${day}.${month}.${year}`}</th>
            <td>{title}</td>
            <td>{count}</td>
            <td>{distance}</td>
        </tr>
    )
}

export default TableItem