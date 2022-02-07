import { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

import Header from './components/Header';

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const AppDiv = styled.div`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Paragraph = styled.p`
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Link = styled.a`
  color: #61dafb;
`;

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`;

export default function App({ num = 0 }) {
  const [count, setCount] = useState(num);

  return (
    <AppDiv>
      <Header>
        <Logo src={logo} alt="logo" />
        <Paragraph>Hello Vite + React!</Paragraph>
        <Paragraph>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </Paragraph>
        <Paragraph>
          Edit <Code>App.tsx</Code> and save to test HMR updates.
        </Paragraph>
        <Paragraph>
          <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
            Learn React
          </Link>
          {' | '}
          <Link
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </Link>
        </Paragraph>
      </Header>
    </AppDiv>
  );
}
