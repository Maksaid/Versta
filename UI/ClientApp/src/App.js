import React, { Component } from 'react';
import {Route, Router, Routes} from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css';
import Home from "./components/Home";
import CreateOrder from "./components/CreateOrder";
import OrderDetails from "./components/OrderDetails";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/createOrder" element={<CreateOrder />} />
                    <Route path="/orders/:id" element={<OrderDetails />} />
                </Routes>
            </Layout>
    );
  }
}
