import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Content } from './components/layout/content/Content';
import { Header } from './components/layout/header/Header';
import { Sidebar } from './components/layout/sidebar/Sidebar';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';

export function App() {
  return (
    <div className="wrapper-site">
      
      <Header />
      <div className="wrapper-content">
        <Sidebar />
        <Content>
            <Routes>
              <Route path="/shop" element={<ShopPage title="Список товаров" />} />
              <Route path="/cart" element={<CartPage title="Корзина" />} />
              <Route path="*" element={<ShopPage title="Список товаров" />} />
            </Routes>
        </Content>
      </div>
    </div>
  );
};