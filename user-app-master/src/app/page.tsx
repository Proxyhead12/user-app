"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/api/v1/producto";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <header className="py-5">
        <nav className="bg-white py-2 rounded-xl my-2">
          <ul className="flex flex-row gap-6">
            <li className="text-black">Home</li>
            <li className="text-black">Products</li>
            <li className="text-black">Services</li>
            <li className="text-black">Contact</li>
          </ul>
        </nav>
      </header>
      <h1>Products</h1>
      {users &&
        users.length > 0 &&
        users.map((user: any) => (
          <div key={user.id} className="my-4 bg-white rounded-2xl p-2">
            <p className="text-black">Product: {user.name}</p>
            <p className="text-black">Price: {user.price}</p>
            <p className="text-black">Id: {user.id}</p>

          </div>
        ))}
    </div>
  );
}
