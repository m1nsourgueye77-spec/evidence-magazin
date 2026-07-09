const s = document.getElementById('search');

if (s) {
    s.oninput = () => {
        document.querySelectorAll('.card').forEach(c => {
            c.style.display = c.innerText
                .toLowerCase()
                .includes(s.value.toLowerCase())
                ? 'block'
                : 'none';
        });
    };
}



// =========================
// RECHERCHE
// =========================
const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", function () {
        const valeur = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(valeur)
                ? "block"
                : "none";
        });
    });
}

// =========================
// ANNEE AUTOMATIQUE
// =========================
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}