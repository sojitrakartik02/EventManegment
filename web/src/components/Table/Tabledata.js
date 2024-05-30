import React from 'react'
import  {DataGrid}  from '@mui/x-data-grid';
import './table.css'


const Tabledata = ({rows,columns}) => {
  return (
    <DataGrid style={{background:'#fff'}}
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    }}
  />
  )
}

export default Tabledata
