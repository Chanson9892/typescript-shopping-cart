import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

//components
import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import Grid  from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//style 
import { Wrapper } from './App.styles';

//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

//api
const getProducts = async (): Promise<CartItemType> =>  // using promise because of the await
  await (await fetch('https://fakestoreapi.com/products')).json()  // the inner await is for the api call. outer is for converting it to json.


const App = () => {
  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
