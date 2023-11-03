import { FC } from 'react';
import BuscaCep from './components/BuscarCep';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <BuscaCep/>
    </div>
  );
};
