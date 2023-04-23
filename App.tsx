import * as React from 'react';
import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Parent />
    </div>
  );
}

const Parent = () => {
  const myRef = useRef(null);

  return (
    <div>
      <Child ref={myRef} />
      <button
        onClick={() => {
          const dd = myRef?.current?.getMyState();

          console.log('dd', dd);
        }}
      >
        click me
      </button>
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  const [myState, setMyState] = useState('This is my state!');
  useImperativeHandle(
    ref,
    () => ({
      getMyState: () => {
        return {
          myState,
          name: 'victor',
          class: 'senior',
        };
      },
    }),
    [myState]
  );

  return <input value={myState} onChange={(e) => setMyState(e.target.value)} />;
});
