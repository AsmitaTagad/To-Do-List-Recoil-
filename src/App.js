import React,{useState} from 'react';
import { myAtom } from './Atoms';
import { useRecoilState } from 'recoil';
import {Link} from 'react-router-dom';


export default function App() {
  const [value, setValue] = useState('');
  let [todos, setTodos] = useRecoilState(myAtom);


  function handleAdd() {

    const newTodo = {
      id: Math.random(),
      name: value,
    };

    setTodos([...todos, newTodo]);
    setValue(" ");
  }

  

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <Link to="/MyList">
           <button>Change Task</button>
      </Link>

    </div>
  );
}
