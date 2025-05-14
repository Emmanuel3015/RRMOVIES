import { Link } from "react-router";
import { MediaCard } from "../components/MediaCard";

export async function loader() {
  let seriesRes = await fetch("https://api.themoviedb.org/3/discover/tv", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });

  let series = await seriesRes.json();

  return series.results;
}

export default function Series({ loaderData }) {
  console.log({ series: loaderData });
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-6xl font-bold mb-7">Series</h1>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white my-7"
      >
        Go back home
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {loaderData.map((item) => (
          <Link key={item.id} to={`/series/${item.id}`}>
            <MediaCard
              posterPath={item.poster_path}
              title={item.original_name}
              rating={item.vote_average}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
