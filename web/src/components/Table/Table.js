import React from 'react'
import './table.css'
import Tabledata from './Tabledata'
import {Ticket} from 'lucide-react'

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 22, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const List = () => {
  return (
    <div className="card__wrappertable shadow-lg p-4 mb-4">
      <div className="card__header">
        <div className="card__header-top mb-5">
          <div className="card__title-inner">
            <div className="card__header-icon" style={{marginBottom:'10px',marginRight:'10px'}}>
            <Ticket absoluteStrokeWidth  size={30} />
            </div>
            <div className="card__header-title">
              <h4 style={{fontSize:'1.2rem'}}>Last Six Months Events</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="attendant__wrapper mb-20">
        <Tabledata rows={rows} columns={columns}/>
      </div>
    </div>

  )
}

export default List
