// src/App.jsx

import { useState } from "react"
import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"

function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchUser = async (username) => {

    setLoading(true)
    setError("")
    setUser(null)

    try {

      const res = await fetch(
        `https://api.github.com/users/${username}`
      )

      if (!res.ok) {
        throw new Error("User not found")
      }

      const data = await res.json()

      setUser(data)

    } catch (err) {

      setError(err.message)

    }

    setLoading(false)
  }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center">

      <div className="w-full max-w-xl p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          GitHub User Finder
        </h1>

        <SearchBar searchUser={searchUser} />

        {loading && (
          <p className="text-center mt-6">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-6">
            {error}
          </p>
        )}

        {user && (
          <UserCard user={user} />
        )}

      </div>

    </div>
  )
}

export default App