import React from 'react';
import { useRecoilValue } from 'recoil';
import {myAtom} from './Atoms';
import {Link} from 'react-router-dom';

export default function MyList() {

  const todoList = useRecoilValue(myAtom);

  return (
    <>
    <h1>To Do List!!</h1>
      {
         todoList.map((x) => (
        <>
          <p key={x.name}>{x.name}</p>
        </>
      ))}
      
      <Link to="/">
           <button>Back</button>
      </Link>

    </>
  );
}
