const jokeText = document.querySelector(".joke");
const buttonEl = document.querySelector(".btn");

const apiKey = "O2Unfc4/qK1UlliwIExJmA==lJ2Lo1hNUsvzhfAY";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

buttonEl.addEventListener("click", async () => {
  try {
    jokeText.innerHTML = "Updating...";
    buttonEl.disabled = true;
    const res = await fetch(apiURL, options);
    const data = await res.json();
    jokeText.innerHTML = data[0].joke;
    buttonEl.disabled = false;
    // jokeText.classList.add('jokeWidth')
  } catch (error) {
    console.log(error)
    jokeText.innerHTML = 'an error happened , try again later'
    buttonEl.disabled = false;
  }
});
