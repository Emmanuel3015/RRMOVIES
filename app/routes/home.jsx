// import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="font-bold text-4xl">Movies and Series</h1>
      <p className="mb-5">This is a Movies and Series Page</p>
      <Link
        to="/movies"
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white my-7 "
      >
        Movies
      </Link>
      <Link
        to="/series"
        className="bg-orange-500 hover:bg-orange-700 px-4 rounded-md py-3 text-white my-7 ml-5 "
      >
        Series
      </Link>
    </main>
  );
}
