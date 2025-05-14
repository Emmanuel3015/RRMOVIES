import { useNavigate } from "react-router";

export async function loader({ params }) {
  let id = params.id;
  let serieRes = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  let serie = await serieRes.json();
  return serie;
}

export default function Movie({ loaderData }) {
  let navigate = useNavigate();
  console.log({ serie: loaderData });
  return (
    <main className="max-w-6xl mx-auto mt-20">
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white my-7"
      >
        Go Back
      </button>
      <div className="flex">
        <img
          className="h-140"
          src={`https://image.tmdb.org/t/p/original${loaderData.poster_path}`}
          alt={`Poster of ${loaderData.original_name}`}
        />
        <div className="px-10 mt-10">
          <h1 className="font-bold text-4xl">{loaderData.original_name}</h1>
          <p className="text-[24px] mt-5">{loaderData.overview}</p>
        </div>
      </div>
    </main>
  );
}
