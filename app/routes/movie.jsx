import { useNavigate } from "react-router";

export async function loader({ params }) {
  let id = params.id;
  let movieRes = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  let movie = await movieRes.json();
  return movie;
}

export default function Movie({ loaderData }) {
  let navigate = useNavigate();
  console.log({ movie: loaderData });
  return (
    <main className="max-w-6xl mx-auto mt-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white mb-7 cursor-pointer"
      >
        Go Back
      </button>
      <div className="flex">
        <img
          className="h-140"
          src={`https://image.tmdb.org/t/p/original${loaderData.poster_path}`}
          alt={`Poster of ${loaderData.title}`}
        />
        <div className="px-10 mt-5">
          <h1 className="font-bold text-4xl">{loaderData.title}</h1>
          <p className="text-[24px] mt-5">{loaderData.overview}</p>
        </div>
      </div>
    </main>
  );
}
