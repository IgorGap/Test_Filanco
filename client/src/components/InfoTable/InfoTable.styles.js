import styled from 'styled-components';

export const TableWrap = styled.div`
  border-collapse: collapse;
  width: 100%;
  color: black;
`;
export const TableHeadItem = styled.th`
  border: 1px solid black;
  padding: 13px 17px;
  border-collapse: collapse;
  background: rgb(130, 168, 175);
  color: white;
`;
export const TableHeadVal = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 15px;
  color: black;
  text-align: center;
`;
export const TableRow = styled.tr`
  background: rgb(215, 218, 230);
  color: black;
`;
export const TableHeadWrapper = styled.thead`
  background: white;
  border: 1px solid black;
  border-collapse: collapse;
  color: black;
`;
export const TableBodyWrapper = styled.tbody`
  background: white;
  border: 1px solid black;
  border-collapse: collapse;
  color: black;
`;
export const TableTitle = styled.td`
  padding: 6px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`;
export const TableContent = styled.td`
  padding: 8px;
  border-left: 1px solid black;
  border-collapse: collapse;
  color: black;
`;
export const TableListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;
export const TableDelete = styled.span`
  cursor: pointer;
  color: rgb(130, 168, 175);
  &:hover {
    color: green;
    cursor: pointer;
  }
`;
export const TableList = styled.ul`
  padding: 0;
`;
export const TableComment = styled.input`
  width: 60%;
  padding: 5px 18px;
  border: 1px solid black;
  &:focus {
    outline: none !important;
    border-color: green;
  }
`;

export const TableButtom = styled.button`
  background-color: rgb(130, 168, 175);
  border: none;
  color: white;
  padding: 5px 18px;
  margin-left: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: green;
    transition-duration: 0.4s;
  }
`;
