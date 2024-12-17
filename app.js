let apiURL = "https://dummyapi.online/api/movies";
let cardContainer = document.getElementById("cardContainer");
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let cards = "";

    for (let i = 0; i < data.length; i++) {
      let movie = data[i];

      cards += `
        <div class="card">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple69/v4/26/27/78/2627782b-11f9-1778-0734-2bf60728644f/source/1920x1080bb.png"//  alt="Image">
         <h3><q>${movie.movie}</q></h3> <!-- Check if movie.title exists -->
          <p><strong>Rating:</strong> ${movie.rating}</p> <!-- Check if movie.year exists -->
        </div>
      `;
    }

    cardContainer.innerHTML = cards;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    cardContainer.innerHTML = `<p style="color:red;">Failed to load data. Try again!</p>`;
  });
