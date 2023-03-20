import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(["푸린", "푸린이", '무소속두', "고트", '휘떄']);
  const [value, setValue] = useState('0000000000000');

  function changeValue(state) {
    setValue(state.target.value)
  }

  function updateList(){
    if(value !== ""){
      console.log('value는 빈칸이 아니야!');
      setList(list.concat(value));
    }
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
          <button onClick={() => updateList()}>추가</button>
        </div>
      </header>
    </div>
  );
}

export default App;
