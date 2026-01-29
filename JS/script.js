const archivio = document.getElementById("archivio");

function aggiungiVoce(titolo, descrizione, link) {
  const voce = document.createElement("div");
  voce.innerHTML = `
    <strong>${titolo}</strong><br />
    <em>${descrizione}</em><br />
    <a href="${link}" target="_blank">Apri su GitHub</a>
  `;
  archivio.appendChild(voce);
}

// Esempio iniziale
aggiungiVoce(
  "Note App",
  "Versione ufficiale con categorie, backup e popup iOS",
  "https://github.com/tuo-utente/NoteApp"
);
