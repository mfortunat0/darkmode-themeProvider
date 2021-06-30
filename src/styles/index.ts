import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.background}; ;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 425px;
  padding: 0 6vw;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${(p) => p.theme.colors.title}; ;
`;

export const SubTitle = styled.p`
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.text};
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.colors.borderColor}; ;
`;

const Input = styled.input`
  margin-top: 20px;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.text};
  width: 100%;
  background-color: transparent;
`;

export const InputEmail = styled(Input).attrs({ type: "email" })`
  border-bottom: 1px solid ${(p) => p.theme.colors.borderColor};
`;
export const InputPassword = styled(Input).attrs({ type: "password" })``;

export const Button = styled.button`
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px 5px;
  font-weight: bold;
  border-radius: 20px;
  outline: none;
  border: none;
  color: #fff;
  background: ${(p) => p.theme.colors.gradient};
`;

export const Register = styled.a`
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  color: ${(p) => p.theme.colors.linkRegister};
  :hover {
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  color: ${(p) => p.theme.colors.linkForgot};
  :hover {
    text-decoration: underline;
  }
`;
