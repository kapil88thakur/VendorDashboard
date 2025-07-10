import React, { useState,useEffect } from 'react'
import FormControl from '@mui/material/FormControl'; 
import Select from '@mui/material/Select'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import { useLazyQuery,useQuery,useMutation } from '@apollo/client';
import { selectShop } from '../graphql/queries';
export default function SelectStore({stores}) {
  let initialStore= localStorage.getItem("selectedStore");
  const [selectedValue,setSelectedValue]= useState( );
        const [selectShopvar, { loading, error ,data}] =useLazyQuery(selectShop);
if(data){
  localStorage.setItem("token",data.selectShop.token);
  localStorage.setItem("selectedStore",selectedValue);
}
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        selectShopvar({
            variables:{  
                    "shopId":event.target.value    
            }
        });
    };
  return (
<>
    <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="demo-simple-select">Choose Store</InputLabel>
    <Select
      value={selectedValue}
      onChange={handleChange}
      label="Choose Store"
      inputProps={{
        name: 'demo-simple-select',
        id: 'demo-simple-select',
      }}>
    {stores.map((item) => 
            <MenuItem value={item._id}>{item.storeName}</MenuItem>
        )}
    </Select>
  </FormControl> 
  </>
  )
}