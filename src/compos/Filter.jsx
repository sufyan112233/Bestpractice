import React, { useState } from "react";

const Filter = () => {
  const ITEMS = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "Tenet", year: 2020 },
    { id: 4, title: "Memento", year: 2000 },
  ];

  const [q, setQ] = useState("");

  const filterd = ITEMS.filter((it) =>
    it.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="p-20">
      <h3>Search filter....</h3>
      <input
      className="border p-2"
        placeholder="search here..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

    {filterd.length === 0 ? (
        <p>no match</p>
    ):
    <ul>
        {filterd.map(it => (
            <li key={it.id}>
                {it.title} {it.year}
            </li>
        ))}
    </ul>
    }
    
    </div>
  );
};

export default Filter;
