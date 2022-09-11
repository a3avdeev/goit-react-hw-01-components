import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  border-collapse: collapse;

  & th {
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    color: #696969;
    background: #00ffff;
    border: 1px solid grey;
  }

  & td {
    padding: 10px;
    color: #696969;
    border: 1px solid grey;
    text-align: center;
  }

  & td:first-child:first-letter {
    text-transform: uppercase;
  }

  & tr:nth-child(odd) {
    background: #d3d3d3;
  }
  & tr:nth-child(even) {
    background: white;
  }
`;
