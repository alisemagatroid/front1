import './App.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import TopBox from './components/TopBox'
import SideBox from './components/SideBox'
import Main from './pages/Main'
import DTE from './pages/DTE'
import ProcessView from './pages/ProcessView'
import GenNftMain from './pages/GenNftMain'
import SelectSellData from './pages/SelectSellData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='APP'>
        <BrowserRouter>
          <TopBox />
          <div className='Container'>
            <SideBox />
            <div className='Main-Box'>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/DTE" element={<DTE />}></Route>
                <Route path="/ProcessView" element={<ProcessView />}></Route>
                <Route path="/SelectSellData" element={<SelectSellData/>}> </Route>
                <Route path="/GenNftMain" element={<GenNftMain/>}> </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
