import styled from '@emotion/styled';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginPageTitle = styled.h1`
  display: inline;
  margin: 30px 0;
  font-size: 36px;
  text-transform: uppercase;

  color: Navy;
`;

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
