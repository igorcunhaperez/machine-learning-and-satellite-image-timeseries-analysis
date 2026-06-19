const state = {
  terms: [],
  selectedTag: "Todos",
  search: ""
};

const glossaryList = document.querySelector("#glossaryList");
const tagFilters = document.querySelector("#tagFilters");
const searchInput = document.querySelector("#searchInput");
const termCounter = document.querySelector("#termCounter");
const emptyState = document.querySelector("#emptyState");

async function loadTerms() {
  try {
    const response = await fetch("data/termos.json");

    if (!response.ok) {
      throw new Error("Não foi possível carregar data/termos.json");
    }

    state.terms = await response.json();
    render();
  } catch (error) {
    glossaryList.innerHTML = `
      <div class="empty-state">
        <h3>Erro ao carregar o glossário</h3>
        <p>Verifique se o arquivo <strong>data/termos.json</strong> existe e se o JSON está válido.</p>
      </div>
    `;
    console.error(error);
  }
}

function normalizeText(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getAllTags() {
  const tags = state.terms.flatMap((term) => term.tags || []);
  return ["Todos", ...new Set(tags)].sort((a, b) => {
    if (a === "Todos") return -1;
    if (b === "Todos") return 1;
    return a.localeCompare(b, "pt-BR");
  });
}

function getFilteredTerms() {
  const search = normalizeText(state.search);

  return state.terms
    .filter((term) => {
      const matchesTag =
        state.selectedTag === "Todos" || (term.tags || []).includes(state.selectedTag);

      const searchableContent = normalizeText([
        term.termo,
        term.definicao,
        ...(term.tags || [])
      ].join(" "));

      const matchesSearch = searchableContent.includes(search);

      return matchesTag && matchesSearch;
    })
    .sort((a, b) => a.termo.localeCompare(b.termo, "pt-BR"));
}

function renderTags() {
  tagFilters.innerHTML = "";

  getAllTags().forEach((tag) => {
    const button = document.createElement("button");
    button.className = "tag-button";
    button.type = "button";
    button.textContent = tag;

    if (tag === state.selectedTag) {
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      state.selectedTag = tag;
      render();
    });

    tagFilters.appendChild(button);
  });
}

function renderTerms() {
  const terms = getFilteredTerms();
  glossaryList.innerHTML = "";

  termCounter.textContent = `${terms.length} ${terms.length === 1 ? "termo" : "termos"}`;
  emptyState.hidden = terms.length > 0;

  let currentLetter = "";

  terms.forEach((term) => {
    const firstLetter = normalizeText(term.termo).charAt(0).toUpperCase();

    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;

      const letterGroup = document.createElement("div");
      letterGroup.className = "letter-group";
      letterGroup.innerHTML = `<h2 class="letter-title">${currentLetter}</h2>`;
      glossaryList.appendChild(letterGroup);
    }

    const article = document.createElement("article");
    article.className = "term-card";

    const tags = (term.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const references = Array.isArray(term.referencias) && term.referencias.length > 0
      ? `
        <div class="references">
          ${term.referencias
            .map((ref) => `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.titulo}</a>`)
            .join(" · ")}
        </div>
      `
      : "";

    article.innerHTML = `
      <h3>${term.termo}</h3>
      <p>${term.definicao}</p>
      <div class="tags">${tags}</div>
      ${references}
    `;

    glossaryList.appendChild(article);
  });
}

function render() {
  renderTags();
  renderTerms();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderTerms();
});

loadTerms();
