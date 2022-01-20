import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const arrayLinks = ['Installation', 'GettingStarted', '3rd'];

export default function PageLayout() {
const [active, setActive] = useState('installation');

console.log(active);

const addNumber = (num) => {
  return num + 1;
}


  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div id="sidebar" style={{borderRight: '1px black solid'}}>
        <CustomLink to='/installation' active={'installation'} fontSize={20} onClick={() => setActive('installation')}>
         <div>
           <p>Installation</p>
          </div>
        </CustomLink>
        <CustomLink to='/getting-started' active={'getting-started'} onClick={() => setActive('getting-started')}>
         Getting Started
        </CustomLink>
        <CustomLink to='/3rd' active={active} onClick={() => addNumber(1)}>
         3rd
        </CustomLink>
      </div>      
      <main>
        <Outlet />
      </main>      
    </div>
  )
}