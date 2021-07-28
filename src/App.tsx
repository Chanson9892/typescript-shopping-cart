import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

//components
import Item from './Item/Item'
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
const getProducts = async (): Promise<CartItemType[]> =>  // using promise because of the await
  await (await fetch('https://fakestoreapi.com/products')).json()  // the inner await is for the api call. outer is for converting it to json.


const App = () => {
  const {data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)

  const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => null

  const handleRemoveToCart = () => null

  if (isLoading) return <LinearProgress /> // adds a loading bar at the top while waiting for fetch
  if (error) return <div>something went wrong...</div>

  return (
    <Wrapper>
      
    </Wrapper>
  );
}

export default App;
