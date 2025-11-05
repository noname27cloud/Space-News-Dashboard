document.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=100";

  // Function to fetch data with caching
  async function fetchData(params = "") {
    const cacheKey = `data_${params}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const res = await fetch(`${url}&${params}`);
    const data = await res.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  }

  // Function to render data on the main page
  function renderMain(arr) {
    let mainHTML = "";
    if (arr.length === 0) {
      mainHTML = `<p>No articles found.</p>`;
    } else {
      arr.forEach((item) => {
        if (item.image_url) {
          mainHTML += `<div class="card">
            <a href=${item.url}>
            <img src=${item.image_url} loading="lazy" />
            <h4>${item.title}</h4>
            <div class="publishbyDate">
                <p>${item.news_site}</p>
                <span>•</span>
                <p>${new Date(item.published_at).toLocaleDateString()}</p>
            </div>
            <div class="desc">${item.summary}</div>
            </a>
          </div>`;
        }
      });
    }
    document.querySelector("main").innerHTML = mainHTML;
  }

  // Desktop form handler
  const searchBtnDesktop = document.getElementById("searchFormDesktop");
  const searchInputDesktop = document.querySelector("#searchFormDesktop input");

  searchBtnDesktop.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (searchInputDesktop.value.trim() !== "") {
      try {
        const data = await fetchData(
          `title_contains=${searchInputDesktop.value}`
        );
        renderMain(data.results);
        searchInputDesktop.value = "";
      } catch (error) {
        console.error("Error during search:", error);
      }
    }
  });

  // Mobile form handler
  const searchBtnMobile = document.getElementById("searchFormMobile");
  const searchInputMobile = document.getElementById("searchInputMobile");

  searchBtnMobile.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (searchInputMobile.value.trim() !== "") {
      try {
        const data = await fetchData(
          `title_contains=${searchInputMobile.value}`
        );
        renderMain(data.results);
      } catch (error) {
        console.error("Error during search:", error);
      }
    }
  });

  // Search function by query
  async function Search(query) {
    const data = await fetchData(`title_contains=${query}`);
    renderMain(data.results);
  }

  // Menu item click handlers
  document.querySelectorAll("nav ul li").forEach((item) => {
    item.addEventListener("click", (e) => {
      const query = e.target.textContent.trim().toLowerCase();
      Search(query);
    });
  });

  // Load all articles on initial load
  fetchData("all").then((data) => renderMain(data.results));

  // Mobile menu handler
  let mobilemenu = document.querySelector(".mobile");
  let menuBtn = document.querySelector(".menuBtn");

  menuBtn.addEventListener("click", () => {
    mobilemenu.classList.toggle("hidden");
  });
  // Menu item click handlers
  document.querySelectorAll("nav ul li").forEach((item) => {
    item.addEventListener("click", (e) => {
      const query = e.target.textContent.trim().toLowerCase();
      if (query === "all articles") {
        fetchData().then((data) => renderMain(data.results)); // Fetch and render all articles
      } else {
        Search(query);
      }
    });
  });

  // Trigger "All Articles" on page load
  const allArticlesMenu = document.querySelector("nav ul li:first-child");
  if (allArticlesMenu) {
    allArticlesMenu.click(); 
  }
});
