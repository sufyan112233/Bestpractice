import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [data, setData] = useState([]);
    const [loading, setL] = useState(true);
    const [error, setE] = useState(null);

    useEffect(() => {
        let alive = true;
        setL(true); setE(null);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(r => (r.ok ? r.json() : Promise.reject(r.statusText)))
        .then(j => (alive && setData(j)))
        .catch(err => alive && setE(err))
        .finally(() => alive && setL(false));
        return () => {alive = false};
    }, []);

    if (loading) return <p>loading....</p>;
    if (error) return <p className='text-red-600'> Error : {String(error)}</p>

  return (
    <div className='p-10'>
      <h1>Posts API</h1>
      <ul>
        {data.slice(0, 10).map(p => (
            <li key={p.id}> {p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
