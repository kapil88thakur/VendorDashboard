import React, { useEffect } from 'react'
import { useQuery,useMutation } from '@apollo/client';
import { getUserById } from '../graphql/queries';
export  function GetUserDetail() {

  
    const { loading, error, data }  =useQuery(getUserById);

    console.log("data is".error)
    return data;
}


//export default GetUserDetail;
