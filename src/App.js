import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { configure } from '@testing-library/react';

function App() {
  const [list, setList] = useState(["푸린", "푸린이", '무소속두', "고트", '휘떄']);
  const [value, setValue] = useState('0000000000000');

  function changeValue(state) {
    setValue(state.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          list.map((element) => <div>이름: {element}</div>)
        }
        <div>
          <input value={value} onChange={changeValue} />
          <button onClick={() => setList(list.concat(value))}>케케켘</button>
        </div>
      </header>
    </div>
  );
}

export default App;
