const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      genre: "Drama",
      rating: 9.3,
      img: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg"
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      genre: "Crime, Drama",
      rating: 9.2,
      img: "https://miro.medium.com/v2/resize:fit:1000/1*Nxaz2PmGHZYJv0gIcBOOWg.jpeg"
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action, Crime, Drama",
      rating: 9.0,
      img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52217243-a137-45d6-9c6a-0dfab4633034/4fee222a97308b9e04d79724b86728d86ed94667.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom"
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      releaseYear: 1994,
      genre: "Crime, Drama",
      rating: 8.9,
      img: "https://m.media-amazon.com/images/S/pv-target-images/f9b4142838a72a46b5203d94580b89e4440f97020c2ca8b00e0abed84184e43b.jpg"
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      releaseYear: 1994,
      genre: "Drama, Romance",
      rating: 8.8,
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_h8_aa.jpg"
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Action, Adventure, Sci-Fi",
      rating: 8.7,
      img: "https://i0.wp.com/images.onwardstate.com/uploads/2010/10/inception.png?fit=1593%2C947&ssl=1"
    },
    {
      title: "The Matrix",
      director: "Lana and Lilly Wachowski",
      releaseYear: 1999,
      genre: "Action, Sci-Fi",
      rating: 8.7,
      img: "https://assets-global.website-files.com/6281caf6259cf84448230ea1/63f8e7039ce6f0e075ca9217_The%20Matrix%20-%20Movies.webp"
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      releaseYear: 1993,
      genre: "Biography, Drama, History",
      rating: 8.9,
      img: "https://www.silverscreen.tours/wp-content/uploads/2021/02/schindlers-list-banner-01.jpg"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      releaseYear: 2001,
      genre: "Action, Adventure, Drama",
      rating: 8.8,
      img: "https://sothebys-md.brightspotcdn.com/69/b5/e7fd127c47e389aab5c566111a69/110.%20LORD%20OF%20THE%20RINGS%20FELLOWSHIP.jpg"
    },
  ];

  const newContentData = movies.map(item=>{
    return `
    <div class="card">
            <div class="card-body">
            <img src="${item.img}" alt="">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">Director: ${item.director}</p>
                <p class="card-text">Release Year: ${item.releaseYear}</p>
                <p class="card-text">Genre: ${item.genre}</p>
                <p class="card-text">Rating: ${item.rating}</p>
            </div>
        </div>
    `
  }).join("");
  
  const movieCards = document.querySelector("#movie-cards");

  movieCards.innerHTML = newContentData;