import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <Sidebar />
      <CardList />
    </>
  );
}