import {gql} from '@apollo/client';

 export const LOGINQuery=gql`
                mutation login($userSignin: UserSigninInput!) { singinUser(userSignin: $userSignin){ token
                 user   {
  _id
	name
  email
  userType
  phone
  shops{
    _id
    storeName
    address1
	vendorId
    storeName
    address1
    address2
    district
    state
    country
    zip
    lat
    long
    contactName
    phone
    altPhone
  }
  }
                
                } }`;

export const selectShop=gql`
query selectShop($shopId:ID!){ selectShop(shopId:$shopId){ token     } }`;   

export const getUserById =gql`
query getUserById {
 user   {
  _id
	name
  email
  userType
  phone
  shops{
    _id
    storeName
    address1
	vendorId
    storeName
    address1
    address2
    district
    state
    country
    zip
    lat
    long
    contactName
    phone
    altPhone
  }
  }
}`;

export const getProducts=gql
`query getProducts{
  products{
     _id
    vendorId
    shopId
    title
    description
    price
    instock
  }
}
`;