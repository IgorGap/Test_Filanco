import React from 'react';
import styled from 'styled-components';
import InfoTableBody from './InfoTableBody';

const TableHeader = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  border-collapse: collapse;
  flex: inline-flex;
`;

function InfoTable() {
  return (
    <div>
      <TableHeader>Аккаунты хостинга</TableHeader>
      <InfoTableBody />
    </div>
  );
}

export default InfoTable;
