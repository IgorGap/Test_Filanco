import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import InfoTable from './components/InfoTable/InfoTable';
import Symbol from './components/Symbol/Symbol';

const WrapperSite = styled.div`
  margin-top: 5%;
  width: 100%;
  color: black;
  display: flex;
  justify-content: space-around;
`;

function App() {
  return (
    <Router>
      <WrapperSite>
        <Navbar />
        <InfoTable />
        <Symbol />
      </WrapperSite>
    </Router>
  );
}

export default App;
