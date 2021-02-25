import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me ok
      </button>
    </div>
  );
}

export default Home;