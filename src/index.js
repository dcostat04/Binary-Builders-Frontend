import './index.css';
import { ColorModeScript } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
localStorage.setItem('response', true);

root.render(
  <>
    <ColorModeScript />
    <App />
  </>
);
