import { useState } from 'react';
import '../css/CardList.css';
import {RiArrowDropDownLine } from 'react-icons/ri';
import { debitCards, creditCards, childrenCards } from '../data/cardData';


export default function CardList() {

  return (
    <>
        <div className='cardListMain'>
            <div className='cardListCategory'>
              <button className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Debit Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              {debitCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='35px'/> 
                    </div>
                  </button>
                );
              })}
              <button className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Credit Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              {creditCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='35px'/> 
                    </div>
                  </button>
                );
              })} 

              <button className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Children Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              {childrenCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='35px'/> 
                    </div>
                  </button>
                );
              })} 

            </div>
        </div>
    </>
  );
}
