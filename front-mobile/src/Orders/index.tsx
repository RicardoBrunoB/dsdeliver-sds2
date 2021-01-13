import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
  const [orders,setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'));
  }, []);
  
  return (
    <>
    <Header />
    <ScrollView style={styles.container}>
       <OrderCard />
       <OrderCard />
       <OrderCard />
       <OrderCard />
       <OrderCard />
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',

  }
});

export default Orders;