// src/components/SearchBar.jsx

import { useState } from "react"

function SearchBar({ searchUser }) {

  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!username.trim()) return

    searchUser(username)
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >

      <input
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="flex-1 border p-2 rounded"
      />

      <button
        className="bg-black text-white px-4 rounded"
      >
        Search
      </button>

    </form>
  )
}

export default SearchBar