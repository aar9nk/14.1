import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const arrayLinks = ['Installation', 'GettingStarted', '3rd'];

export default function PageLayout() {
const [active, setActive] = useState('installation');

console.log(active);

  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div id="sidebar" style={{borderRight: '1px black solid'}}>
        <CustomLink to='/installation' active={active} onClick={() => setActive('installation')}>
         Installation
        </CustomLink>
        <CustomLink to='/getting-started' active={active} onClick={() => setActive('getting-started')}>
         Getting Started
        </CustomLink>
        <CustomLink to='/3rd' active={active} onClick={() => setActive('3rd')}>
         3rd
        </CustomLink>
      </div>      
      <main>
        <Outlet />
      </main>      
    </div>
  )
}