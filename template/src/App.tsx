import { FC } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
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

export const App: FC = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <Logo alt="logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </Link>
      </AppHeader>
    </AppWrapper>
  );
};
