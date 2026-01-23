export async function fetchMovies() {
  const res = await fetch("./mockup_Data/movies.json");
  if (!res.ok) {
    throw new Error(`Failed to fetch movies.json (${res.status})`);
  }
  return await res.json();
}