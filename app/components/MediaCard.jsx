export function MediaCard({ posterPath, title, rating }) {
  return (
    <article>
      <img src={`http://image.tmdb.org/t/p/w500${posterPath}`} alt="" />
      <h2 className="mt-4">{title}</h2>
      <p>{rating}</p>
    </article>
  );
}
