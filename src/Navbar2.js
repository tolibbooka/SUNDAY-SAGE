import React from 'react';

const Navbar2 = () => {
    return (
        <div>
            <Router>
                <nav>
                    <div className="cloud">
                        <img src='imges/Yangi1.png' />
                    </div>
                    <ul className="nav-item">
                        <li><NavLink to='/' activeclassname='selected'>Overview</NavLink></li>
                        <li><NavLink to='/Worker' activeclassname='selected'>Worker</NavLink></li>
                        <li><NavLink to='/Chart' activeclassname='selected'>Chart</NavLink></li>
                        <li><NavLink to='/Invoices' activeclassname='selected'>Invoices</NavLink></li>
                        <li><NavLink to='/Goals' activeclassname='selected'>Goals</NavLink></li>
                        <li><NavLink to='/Settings' activeclassname='selected'>Settings</NavLink></li>
                    </ul>
                    <button className="btn">Request a quote</button>
                </nav>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/Worker" element={<Worker />} />
                    <Route path="/Chart" element={<Chart />} />
                    <Route path="/Invoices" element={<Invoices />} />
                    <Route path="/Goals" element={<Goals />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
                <Body/>
                
             
            </Router>
        </div>
    );
};

export default Navbar2;