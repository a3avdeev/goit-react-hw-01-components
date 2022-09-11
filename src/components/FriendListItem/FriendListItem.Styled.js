import styled from 'styled-components';

export const FriendListItemThumb = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 4px 0;

  & span {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: ${props =>
      props.isOnline === 'Green' ? 'Green' : 'Red'};
  }

  & img {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 6px;
    margin-left: 20px;
  }

  & p {
    margin-left: 20px;
    font-size: 1.5em;
  }
`;
