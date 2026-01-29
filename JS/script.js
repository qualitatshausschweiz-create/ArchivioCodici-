const archivio = document.getElementById("archivio");
const form = document.getElementById("form");

function aggiungiVoce(titolo, descrizione, link) {
  const voce = document.createElement("div");
  voce.innerHTML = `
    <strong>${titolo}</strong><br />
    <em>${descrizione}</em><br />
    <a href="${link}" target="_blank">Apri su GitHub</a>
  `;
  archivio.appendChild(voce);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titolo = document.getElementById("titolo").value;
  const descrizione = document.getElementById("descrizione").value;
  const link = document.getElementById("link").value;

  aggiungiVoce(titolo, descrizione, link);

  form.reset();
});
