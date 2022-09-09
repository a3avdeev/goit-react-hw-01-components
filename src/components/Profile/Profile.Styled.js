import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 400px;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stats {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .avatar {
    width: 10em;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;
