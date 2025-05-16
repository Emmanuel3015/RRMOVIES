// import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center mt-20">
      <h1 className="font-bold text-[40px]">Movies and Series</h1>
      <p className="mb-5">This is a Movies and Series Page</p>
    </main>
  );
}
