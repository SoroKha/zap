import { useState } from 'react';
import '../css/Sidebar.css';
import {RiArrowDropDownLine, RiBankLine } from 'react-icons/ri';
import { BiLineChart } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { IoSettingsOutline, IoCloseOutline } from 'react-icons/io5';

const navItems = [
  {
    title: 'Banking',
    icon: <RiBankLine size='25' style={{float: 'left'}} />,
    collapsable: true
  },
  {
    title: 'Investments',
    icon: <BiLineChart size='25' style={{float: 'left', color: 'gray'}}/>,
  },
  {
    title: 'Services',
    icon: <BsGrid size='25' style={{float: 'left'}} />,
    badge: true
  },
  {
    title: 'Settings',
    icon: <IoSettingsOutline size='25' style={{float: 'left'}} />,
  }
]

export default function Sidebar() {
  const [footer, setFooter] = useState(true);

  return (
    <>
      <div className='navMain'>
        <div className='title'>
            <p>ZAP!</p>
        </div>
        <div className='nav'>          
          {navItems.map((item, index) => {
            const { title, icon, badge, collapsable } = item;
            return (
              <button key={index} className='navBtn'>
                {icon}
                <p style={{ margin: 0, float: 'left', paddingLeft: '12px', paddingTop: '5px' }}> {title} </p>
                { badge === true && 
                  <div className='navBadge'>
                    2
                  </div>
                }
                {collapsable === true && <RiArrowDropDownLine size='25' style={{float: 'right'}} />}
              </button>
            );
          })}         
        </div>
        { footer === true &&
        <div className='navFooter'>
        <img className='chatBubbles' src='/icons/bubbles.png' alt='ChatBubbles' width='150px'/>
          <button onClick={() => setFooter(false)} className='navFooterClose'>
            <IoCloseOutline size='22px' color='white' />
          </button>
          <p className='navFooterTitle'>
            Invite a friend and get $50 off
          </p>
          <p className='navFooterBody'>
            Recommend our bank to your friends and get $50 off every time your friend opens an account
          </p>
          <button className='navFooterButton'>
            INVITE FRIEND
          </button>
        </div>
        }
      </div>
    </>
  );
}
