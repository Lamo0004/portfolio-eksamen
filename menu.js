// Opretter konstanter
const burger = document.querySelector(".burger"); // Burger-ikonet
const nav = document.querySelector("nav"); // Navigationselementet
const menu = document.querySelector(".menu"); // Menu-listen
const links = document.querySelectorAll(".menu li a"); // Alle links i menuen

// Tilføj en event listener (click) til burger-ikonet for at aktivere burgermenuen
burger.addEventListener("click", () => {
  burger.classList.toggle("active"); // Tilføjer eller fjerner "active" klassen fra burger-ikonet
  nav.classList.toggle("active"); // Tilføjer eller fjerner "active" klassen fra navigationen
});
// Når brugeren klikker på burger-ikonet, åbnes eller lukkes menuen.

// Tilføj event listeners til hvert link i menuen
links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active"); // Fjerner "active" klassen fra burger-ikonet ved klik på et link
    nav.classList.remove("active"); // Fjerner "active" klassen fra navigationen ved klik på et link
  });
});
// Når brugeren klikker på et link i menuen, lukkes menuen. Dette gøres ved at fjerne klassen "active" på relevante elementer.
// Bla bla //
