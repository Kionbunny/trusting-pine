document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const cards = Array.from(document.querySelectorAll(".employee-card"));

  searchInput.addEventListener("input", () => {
    const val = searchInput.value.toLowerCase();
    cards.forEach((card) => {
      card.style.display = card.innerText.toLowerCase().includes(val)
        ? "block"
        : "none";
    });
  });

  sortSelect.addEventListener("change", () => {
    const container = document.querySelector(".employee-container");
    const sorted = cards.sort((a, b) => {
      const aVal = a.querySelector("strong").innerText;
      const bVal = b.querySelector("strong").innerText;
      return aVal.localeCompare(bVal);
    });
    container.innerHTML = "";
    sorted.forEach((c) => container.appendChild(c));
  });

  document
    .querySelectorAll(".delete-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".employee-card").remove()
      )
    );

  document.querySelectorAll(".edit-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = btn.closest(".employee-card").dataset.id;
      localStorage.setItem("editId", id);
      window.location.href = "form.html";
    })
  );
});
