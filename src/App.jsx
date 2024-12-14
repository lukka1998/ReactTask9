import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }
  // ...
];

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function UserList() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(`/user/${user.id}`)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetails() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      {user ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">მომხმარებლის დეტალები</h2>
          <p className="text-lg">მომხმარებლის ID: {user.id}</p>
          <p className="text-lg">სახელი: {user.სახელი}</p>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>
            უკან დაბრუნება
          </button>
        </div>
      ) : (
        <p className="text-lg text-red-500">მომხმარებელი ვერ მოიძებნა</p>
      )}
    </div>
  );
}

export default App;