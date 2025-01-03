import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

const App = () => {
  const activeMenu = true;


  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-black ">
          <div className="fixed right-4 bottom-4" style={{ zIndex:'1000' }}>
            
            <Tooltip title="Settings" arrow >
            <button 
            type="button"
            className="text-3xl p-3
            hover:drop-shadow-xl
            hover:bg-gray-50 text-white"
            style={{background: 'blue', borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FiSettings />
            </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar 
            dark:bg-secondary-dark-bg bg-white">
              <Sidebar/>
            </div>
          ):(
            <div className="w-0  dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* there are two ways to write code 
          first in simple way that is there is repeatation of code 
          second decrease the repeatation of code
          here what we see we repeat dark:bd-main-bg bg-main-bg min-h screen  w-full this code*/}
            {/* // activeMenu ? 'dark:bd-main-bg bg-main-bg min-h screen md:ml-72 w-full'
            //   :
            //   'dark:bd-main-bg bg-main-bg min-h screen md:ml-72 w-full flex-2' */}
          <div className={ `dark:bg-main-bg bg-main-bg min-h screen w-full
           ${activeMenu ? 'md:ml-72' : 'flex-2'} `
          }>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

          </div>
          <div>
            <Routes>
            <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              <Route path="/karban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-pickers" element={<ColorPicker />} />

              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />




            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
