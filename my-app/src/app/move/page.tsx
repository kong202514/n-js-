import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

async function getmoves() {
  let key = process.env.API_KEY;

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=fa58838e36d56a9ac8fb4edf6ea54d16";

  const res = await fetch(url);

  if (!res.ok) {
    console.log("error");
  }
  return res.json();
}
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default async function main_get_mov() {
  let movs = await getmoves();
  console.log(movs);

  return (
    <div>
      Movie
      {/* {res.results.map((mov: MovieType) => <i>{mov.original_title}</i>)} */}
      <div className="grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movs.results.map((mov: MovieType) => (
          <Card key={mov.id}>
            <CardActionArea href={`/movie/${mov.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                alt={mov.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {mov.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mov.overview}
                  {mov.release_date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
