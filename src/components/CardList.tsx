import { useState } from 'react';
import '../css/CardList.css';
import {RiArrowDropDownLine } from 'react-icons/ri';
import { debitCards, creditCards, childrenCards } from '../data/cardData';


export default function CardList() {
  const [dropdown, setDropdown] = useState({ debit: true, credit: true, children: true });

  return (
    <>
        <div className='cardListMain'>
            <div className='cardListCategory'>
              <button onClick={() => setDropdown({ ...dropdown, debit: !dropdown.debit  })} className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Debit Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              { dropdown.debit === true && 
              debitCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='55px'/> 
                    </div>
                  </button>
                );
              })}
              <button onClick={() => setDropdown({ ...dropdown, credit: !dropdown.credit  })} className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Credit Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              { dropdown.credit === true && 
              creditCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='55px'/> 
                    </div>
                  </button>
                );
              })} 

              <button onClick={() => setDropdown({ ...dropdown, children: !dropdown.children  })} className='cardListTitle'>
                <p style={{float: 'left', margin: '0'}}>
                  Children Cards
                </p>
                <RiArrowDropDownLine size='25' style={{float: 'right'}}/> 
              </button>
              { dropdown.children === true && 
              childrenCards.map((item, index) => {
                const { name, amount, icon } = item;
                return (
                  <button key={index} className='cardListCard'>
                    <div className='left-wrapper'>
                      <div className='name'> {name} </div>
                    </div>
                    <div className='right-wrapper'>
                      <div className='amount'> {amount} </div>
                      <img className='icon' src={icon} alt='card' width='55px'/> 
                    </div>
                  </button>
                );
              })} 

            </div>
        </div>
    </>
  );
}
