// src/components/UserCard.jsx

function UserCard({ user }) {

  return (

    <div className="bg-white p-6 rounded shadow mt-6 text-center">

      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold mt-4">
        {user.name || user.login}
      </h2>

      <p className="text-gray-500">
        {user.bio}
      </p>

      <div className="flex justify-center gap-6 mt-4">

        <div>
          <p className="font-bold">
            {user.followers}
          </p>
          <p className="text-sm text-gray-500">
            Followers
          </p>
        </div>

        <div>
          <p className="font-bold">
            {user.public_repos}
          </p>
          <p className="text-sm text-gray-500">
            Repos
          </p>
        </div>

      </div>

      <a
        href={user.html_url}
        target="_blank"
        className="inline-block mt-4 text-blue-500"
      >
        View Profile
      </a>

    </div>
  )
}

export default UserCard