import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 20px auto;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  font-size: 1.3em;
  text-transform: uppercase;
  margin: 20px auto;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  & li {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-top: 20px;
    padding-bottom: 20px;

    & span:nth-child(2) {
        font-size: 1.5em;
        margin-top: 6px;
    }
`;
