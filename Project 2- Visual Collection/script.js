// Basically, nested data. 

const albums = [
    {
        image: "impossible-princess.jpeg",
        title: "Impossible Princess",
        artist: "Kylie Minogue",
        releaseDate: 1997,
        releaseDecade: 1990,
        sleeveType: "Gatefold",
        genre: "Artpop",
        discColor: "Orange",
  
      },
      {
          image: "blood-bitch.jpeg",
          title: "Blood Bitch",
          artist: "Jenny Hval",
          releaseDate: 2016,
          releaseDecade: 2010,
          sleeveType: "Single",
          genre: "Artpop",
          discColor: "Black",
      },
      {
          image: "new-amerykah.jpeg",
          title: "New Amerykah Part One (4th World War)",
          artist: "Erykah Badu",
          releaseDate: 2008,
          releaseDecade: 2000,
          sleeveType: "Gatefold",
          genre: "Neosoul",
          discColor: "Red",
      },
      {
          title: "LP1",
          image: "lp1.jpeg",
          artist: "FKA Twigs",
          releaseDate: 2014,
          releaseDecade: 2010,
          sleeveType: "Single",
          genre: "Artpop",
          discColor: "Black",
      },
      {
          title: "I Am Not a Doctor",
          image: "not-a-doctor.jpeg",
          artist: "Moloko",
          releaseDate: 1998,
          releaseDecade: 1990,
          sleeveType: "Triple",
          genre: "Triphop",
          discColor: "White",
      },
      {
          title: "Deathconciousness",
          image: "deathconciousness.jpeg",
          artist: "Have a Nice Life",
          releaseDate: 2008,
          releaseDecade: 2000,
          sleeveType: "Double",
          genre: "Postpunk",
          discColor: "Green",
      },
      {
          title: "New Plastic Ideas",
          image: "new-plastic.jpeg",
          artist: "Unwound",
          releaseDate: 1994,
          releaseDecade: 1990,
          sleeveType: "Single",
          genre: "Posthardcore",
          discColor: "Clear",
      },
      {
          title: "Believer",
          image: "believer.jpeg",
          artist: "Smerz",
          releaseDate: 2021,
          releaseDecade: 2020,
          sleeveType: "Single",
          genre: "Electronic",
          discColor: "Black",
      },
      {
          title: "The Sensual World",
          image: "The_Sensual_World.jpeg",
          artist: "Kate Bush",
          releaseDate: 1989,
          releaseDecade: 1980,
          sleeveType: "Single",
          genre: "Artpop",
          discColor: "Black",
      },
      {
          title: "Remain in Light",
          image: "TalkingHeadsRemaininLight.jpeg",
          artist: "Talking Heads",
          releaseDate: 1980,
          releaseDecade: 1980,
          sleeveType: "Single",
          genre: "Postpunk",
          discColor: "Clear",
      },
      {
          title: "Take Me Apart",
          image: "Kelela-Take-Me-Apart.jpeg",
          artist: "Kelela",
          releaseDate: 2017,
          releaseDecade: 2010,
          sleeveType: "Single",
          genre: "Alternativer&b",
          discColor: "Clear",
      },
      {
          title: "13 inch Frank Beltrame Italian Stiletto with Bison Horn Grips",
          image: "frank-beltrame.jpeg",
          artist: "Xiu Xiu",
          releaseDate: 2024,
          releaseDecade: 2020,
          sleeveType: "Single",
          genre: "Neopsychedelia",
          discColor: "Green",
      },
  ];
  
  // ###
  // From the "03_review"
  // ###
  

  let wrapper = document.querySelector(".wrapper");

//   // Render books
//   let renderBooks = (data) => {
//     wrapper.innerHTML = ""; // Clear old results
//     data.forEach((book) => {
//       let newDiv = document.createElement("div");
  
//       // Add genre and discColor as data attributes
//       newDiv.setAttribute("data-genre", book.genre);
//       newDiv.setAttribute("data-disc", book.discColor);
  
//       newDiv.innerHTML = `
//         <h3>${book.title}</h3>
//         <p>${book.artist}</p>
//         <p>${book.releaseDate}</p>`;
  
//       wrapper.append(newDiv);
//     });
//   };

let renderAlbums = (data) => {
    wrapper.innerHTML = ""; 
    data.forEach((album) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("album-card");
  
      newDiv.setAttribute("data-genre", album.genre);
      newDiv.setAttribute("data-disc", album.discColor);
  
      newDiv.innerHTML = `
        <img src="${album.image}" alt="${album.title} cover" class="album-image" />
        <div class="album-info">
          <h3>${album.title}</h3>
          <p>${album.artist}</p>
          <p>${album.releaseDate}</p>
        </div>
      `;
  
      wrapper.append(newDiv);
    });
  };
  
  renderAlbums(albums);
  
  const genres = ["Neosoul", "Triphop", "Posthardcore", "Electronic", "Artpop", "Postpunk", "Alternativer&b", "Neopsychedelia"];
  const discColors = ["Green", "Clear", "Black", "Orange", "White", "Red"];
  
  let genreSelect = document.querySelector("#genreSelect");
  let discSelect = document.querySelector("#discSelect");
  
  genres.forEach((genre) => {
    let option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
  
  discColors.forEach((color) => {
    let option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    discSelect.appendChild(option);
  });
  
  let filterAlbums = () => {
    let selectedGenre = genreSelect.value;
    let selectedColor = discSelect.value;
  
    let albumDivs = document.querySelectorAll(".wrapper div");
  
    albumDivs.forEach((album) => {
      let albumGenre = album.getAttribute("data-genre");
      let albumColor = album.getAttribute("data-disc");
  
      let genreMatch = selectedGenre === "All Genres" || albumGenre === selectedGenre;
      let colorMatch = selectedColor === "All Colors" || albumColor === selectedColor;
  
      album.style.display = genreMatch && colorMatch ? "block" : "none";

    });
  };
  

  genreSelect.addEventListener("change", filterAlbums);
  discSelect.addEventListener("change", filterAlbums);