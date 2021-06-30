import {
  Button,
  Form,
  Link,
  SubTitle,
  Title,
  InputWrapper,
  Main,
  Register,
  InputEmail,
  InputPassword,
} from "../styles/index";

export default function Home() {
  return (
    <Main>
      <Form>
        <Title>Welcome back!</Title>
        <SubTitle>Please login to your account.</SubTitle>
        <InputEmail placeholder="Email Address" />
        <InputWrapper>
          <InputPassword placeholder="Password" />
          <Link>Forgot?</Link>
        </InputWrapper>
        <Button>Login</Button>
        <Register href="#">REGISTER NOW</Register>
      </Form>
    </Main>
  );
}
