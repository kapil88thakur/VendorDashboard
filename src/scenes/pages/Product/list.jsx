import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getProducts } from '../../../graphql/queries';
import { useQuery,useLazyQuery,useMutation } from '@apollo/client';


// function createData(title, description, instock, price, _id) {
//     return { title, description, instock, price, _id };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


export default function ProductList() {

//   const [rows, setRows] = React.useState([{
//     "title":"",
//             "description":"",
//             "instock":"",
//             "price":"",
//             "_id":""
//   }]);



const rows=[];

  const { loading, error ,data} =useQuery(getProducts);

  if(data){

    data.products.map((row) => {
        let item={
            "title":row.title,
            "description":row.description,
            "instock":row.instock,
            "price":row.price,
            "_id":row._id
        }
        rows.push(item)
    }
    );
  }



  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Instock</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.instock}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row._id}</TableCell>
            
          </TableRow>
         
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
