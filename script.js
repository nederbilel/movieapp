const themeToggle = document.getElementById('themeToggle');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Movie Data with corrected URLs
const horrorMovies = [
  {
    title: "It",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY1Njc4OV5BMl5BanBnXkFtZTgwNjYwMjY0MTI@._V1_SX300.jpg",
    type: "Movie",
    plot: "In the town of Derry, children begin disappearing, and a group of kids faces the evil clown Pennywise."
  },
  {
    title: "The Conjuring",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA4MjQ5MDk2MF5BMl5BanBnXkFtZTcwNzY2Mjk2OQ@@._V1_SX300.jpg",
    type: "Movie",
    plot: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
  },
  {
    title: "A Quiet Place",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg5NzA0MTc3N15BMl5BanBnXkFtZTgwMTkxOTk4NTM@._V1_SX300.jpg",
    type: "Movie",
    plot: "In a post-apocalyptic world, a family must live in silence to avoid blind monsters that hunt by sound."
  }
];

const funnyMovies = [
  {
    title: "The Mask",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNjE0OTk2OTk1OV5BMl5BanBnXkFtZTcwMDE2NjkxNA@@._V1_SX300.jpg",
    type: "Movie",
    plot: "A man finds a magical mask that transforms him into a mischievous superhero with cartoonish powers."
  },
  {
    title: "Superbad",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY4Njk1ODQ2MF5BMl5BanBnXkFtZTcwOTQyNzYyMw@@._V1_SX300.jpg",
    type: "Movie",
    plot: "Two high school friends try to make the most of their remaining time before graduation."
  },
  {
    title: "Step Brothers",
    year: 2008,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzY3Mjk1OF5BMl5BanBnXkFtZTcwMzM1NDQ2MQ@@._V1_SX300.jpg",
    type: "Movie",
    plot: "Two middle-aged, lazy men become stepbrothers when their parents marry and cause chaos in the household."
  }
];

// Function to create card
function createCard(movie, container) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="info">
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Type: ${movie.type}</p>
    </div>
  `;

  card.addEventListener('click', () => {
    modalBody.innerHTML = `
      <h2>${movie.title} (${movie.year})</h2>
      <p>${movie.plot}</p>
    `;
    modal.style.display = 'block';
  });

  container.appendChild(card);
}

// Populate sections
const horrorContainer = document.getElementById('horrorContainer');
horrorMovies.forEach(movie => createCard(movie, horrorContainer));

const funnyContainer = document.getElementById('funnyContainer');
funnyMovies.forEach(movie => createCard(movie, funnyContainer));

// Modal close
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });
