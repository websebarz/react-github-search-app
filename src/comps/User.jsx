export default function User({ currUser }) {
  return (
    <div className="flex flex-col">
      <img src={currUser.avatar_url} />
      <h1>{currUser.login}</h1>
      <p>{currUser.bio}</p>
      <p>Followers: {currUser.followers}</p>
      <p>Following: {currUser.following}</p>
    </div>
  );
}
