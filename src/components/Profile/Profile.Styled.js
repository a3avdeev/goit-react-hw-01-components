import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: 30px auto;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  & img {
    width: 10em;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }

  & p {
    margin-top: 16px;
    margin-bottom: 0;

    & :first-child {
      font-size: 1.3em;
    }
  }
`;
export const StatsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-bottom: auto;

  & li {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #d3d3d3;
    padding-top: 20px;
    padding-bottom: 20px;

    & span:nth-child(2) {
      font-weight: bold;
      margin-top: 6px;
    }
  }
`;
