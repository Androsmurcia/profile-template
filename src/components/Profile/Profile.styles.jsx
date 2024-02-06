import styled from 'styled-components';

export const ProfileContainer = styled('div')`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 390px;
  width: 320px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 35px 0 0;
`;

export const ProfileDescription = styled('div')`
  text-align: center;
`;
export const ProfileText = styled('p')`
  color: #000;
  font-size: 25px;
`;
export const TagText = styled('p')`
  font-size: 15px;
  color: #808080;
`;

export const ProfileImage = styled('img')`
  border: 2px solid #dfdfdf;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;
export const ProfileStats = styled('ul')`
  display: flex;
  list-style: none;
  padding: 10px 0;
  justify-content: center;
  background-color: #e8e8e8;
  border-top: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  margin: 0;
  height: 70px;
  width: 100%;
`;

export const ProfileList = styled('li')`
  display: inline-block;
  text-align: center;
  font-size: 15px;
  width: 90px;

  ${props => {
    if (props.$variant === 'center') {
      return 'border-left: 2px solid #dfdfdf; border-right: 2px solid #dfdfdf;';
    }
  }}
`;

export const ProfileLabel = styled('label')`
  padding: 10px 15px;
  display: block;
  color: #7e7e7e;
`;

export const ProfileSpan = styled('span')`
  display: block;
  font-weight: bold;
`;
