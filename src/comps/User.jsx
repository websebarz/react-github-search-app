export default function User({ currUser }) {
  return (
    <div className="flex flex-col p-6 w-5/6 bg-[#fff] mr-auto ml-auto rounded-lg shadow-lg">
      <div className="flex justify-between">
        <img className="w-[70px] rounded-full" src={currUser.avatar_url} />
        <div>
          <h1 className="font-bold">{currUser.name}</h1>
          <h3>@{currUser.login}</h3>
          <p>{currUser.created_at}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>{currUser.bio}</p>
      </div>
      <div className="mt-6">
        <p>Repos {currUser.public_repos}</p>
        <p>Followers {currUser.followers}</p>
        <p>Following {currUser.following}</p>
      </div>
    </div>
  );
}
