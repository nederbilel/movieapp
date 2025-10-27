# Project Specification: Movie Explorer App

## Project Overview
Movie Explorer is a web application that allows users to search for movies and view their details in an interactive and responsive layout. It leverages the OMDb API to fetch movie data dynamically and displays results in card-style UI elements.

---

## Functional Features

1. **Search Functionality**
   - Users can enter a movie title in the search bar.
   - Clicking the search button or pressing Enter fetches relevant movies.

2. **Movie Display Cards**
   - Each movie is displayed in a card with:
     - Poster image (placeholder used if unavailable)
     - Movie title
     - Year of release
     - Type (Movie, Series, etc.)

3. **Responsive Layout**
   - Grid layout adjusts automatically to screen size.
   - Mobile-friendly design for smaller devices.

4. **Error Handling**
   - Displays a friendly message if no results are found.
   - Handles network or API errors gracefully.

---

## Technical Features

- **HTML5** for semantic page structure.
- **CSS3** for responsive and styled UI.
- **JavaScript (ES6)** for dynamic DOM manipulation and API calls.
- Modular JavaScript function (`createMovieCard`) for reusable card components.
- Uses **fetch API** to get data from OMDb.
- Includes hover effects and transitions for interactive UI.

---

## Deployment

- Hosted on **GitHub Pages** for public access.
- Static deployment; no server-side code required.
- Repository link: `https://github.com/nederbilel/movieapp.git`
- Deployed live app: `https://nederbilel.github.io/movieapp/`

---

## Future Enhancements (Optional)

- Add **pagination** to browse through more search results.
- Include **movie details modal** for extended information.
- Add **favorite/save functionality** with local storage.
- Implement **dark/light theme toggle** for UI customization.

---

## Author

Louati Nader Bilel
Date: 2025-10-27
