import styled from '@emotion/styled';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;
  width: 500px;
  height: 360px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
`;

export const EmailInput = styled.input`
  display: block;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  border: none;
  &::placeholder {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:hover,
  &:focus,
  &:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;
    &::placeholder {
      color: #ff5722;
      position: relative;
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: #858585;
  font-weight: lighter;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

export const PasswordInput = styled.input`
  display: block;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  border: none;
  &::placeholder {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:hover,
  &:focus,
  &:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;
    &::placeholder {
      color: #ff5722;
      position: relative;
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: #858585;
  font-weight: lighter;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

export const Btn = styled.button`
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  color: white;
  background: #188ce8;
  border: none;
  border-radius: 4px;
  border-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const Noreg = styled.span`
  text-transform: uppercase;
  color: #858585;
  font-weight: lighter;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
