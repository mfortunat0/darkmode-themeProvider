import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { useState } from "react";
import DarkSwitcher from "../components/dark";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins",sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
  }
`;

const lightTheme = {
  colors: {
    background: "#fff",
    title: "#1B2023",
    text: "#888A8B",
    linkForgot: "#3F70D9",
    gradient: "linear-gradient(to right, #A530ED , #008BEA)",
    linkRegister: "#8F8F8F",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
};

const darkTheme = {
  colors: {
    background: "#14172F",
    title: "#fff",
    text: "#888A8B",
    linkForgot: "#3F70D9",
    gradient: "linear-gradient(to right, #A530ED , #008BEA)",
    linkRegister: "#8F8F8F",
    borderColor: "#888A8B",
  },
};

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <DarkSwitcher toggleMode={toggleMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
