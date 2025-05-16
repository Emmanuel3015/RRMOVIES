import { Link } from "react-router";
import { MediaCard } from "../components/MediaCard";

export async function loader() {
  let moviesRes = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });

  let movies = await moviesRes.json();
  //   console.log(movies);

  return movies.results;
}

export default function Movies({ loaderData }) {
  console.log({ movies: loaderData });
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-6xl font-bold mb-7 mt-6">Movies</h1>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white  cursor-pointer"
      >
        Go back home
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {loaderData.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`} prefetch="intent">
            <MediaCard
              posterPath={item.poster_path}
              title={item.title}
              rating={item.vote_average}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
