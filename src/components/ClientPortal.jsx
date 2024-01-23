import React, { useState } from 'react';
import '../styles/ClientPortal.css';

const Page1 = () => <div>Page 1</div>; 
const Page2 = () => <div>Page 2</div>; 

const ClientPortal = () => {
    const [activePage, setActivePage] = useState('page1');

    const handleClick = (page) => {
        setActivePage(page);
    };

    return (
        <div className='client-portal-container'>
            <div className='sidebar'>
                <button className={activePage === 'page1' ? 'active' : ''} onClick={() => handleClick('page1')}>Page 1</button>
                <button className={activePage === 'page2' ? 'active' : ''} onClick={() => handleClick('page2')}>Page 2</button>
                {/* Add more buttons as needed */}
            </div>
            <div className='main-content'>
                {activePage === 'page1' && <Page1 />}
                {activePage === 'page2' && <Page2 />}
                {/* Add more conditions as needed */}
            </div>
        </div>
    );
}

export default ClientPortal;
