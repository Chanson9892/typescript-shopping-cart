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
import { Wrapper, StyledButton } from './App.styles';

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
  const [cartOpen, setCartOpen] = useState(false); // boolean to tell us if the cart is open or closed
  const [cartItems, setCartItems] = useState([] as CartItemType[]); 

  const {data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) => null

  const handleAddToCart = (clickedItem: CartItemType) => null

  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress /> // adds a loading bar at the top while waiting for fetch
  if (error) return <div>something went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3} >
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ) )} 
      </Grid>
    </Wrapper>
  );
}

export default App;
