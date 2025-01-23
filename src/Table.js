import React from 'react'
import TableBody from './data'

const Table = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>AGE</th>
                <th>CITY</th>
            </tr>
        </thead>
        <TableBody />
    </table>
  )
}

export default Table