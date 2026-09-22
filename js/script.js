// Toggle class active untuk humburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#humburger-menu");
const searchButton = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const cartButton = document.querySelector("#shopping-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const detailModal = document.querySelector("#item-detail-modal");
const closeModalButton = detailModal.querySelector(".close-icon");
const detailButtons = document.querySelectorAll(".product-icons a:nth-child(2)");
const modalImage = detailModal.querySelector(".modal-content > img");
const modalTitle = detailModal.querySelector(".modal-info h3");
const modalDescription = detailModal.querySelector(".modal-info p");
const modalStars = detailModal.querySelector(".modal-info .product-stars");
const modalPrice = detailModal.querySelector(".modal-info .product-price");

// ketika humburger menu di klik
hm.onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle("active");
}

// Toggle class active untuk search form
searchButton.onclick = (e) => {
    e.preventDefault();
    searchForm.classList.toggle('active');
    searchBox.focus();
}

// Toggle class active untuk shopping cart
cartButton.onclick = (e) => {
    e.preventDefault();
    shoppingCart.classList.toggle('active');
}

// Toggle product detail modal
detailButtons.forEach((button) => {
    button.onclick = (e) => {
        e.preventDefault();
        const productCard = button.closest(".product-card");
        const productImage = productCard.querySelector(".product-image img");
        const productTitle = productCard.querySelector(".product-content h3");
        const productDescription = productCard.dataset.description;
        const productStars = productCard.querySelector(".product-stars");
        const productPrice = productCard.querySelector(".product-price");

        modalImage.src = productImage.src;
        modalImage.alt = productImage.alt;
        modalTitle.textContent = productTitle.textContent;
        modalDescription.textContent = productDescription;
        modalStars.innerHTML = productStars.innerHTML;
        modalPrice.innerHTML = productPrice.innerHTML;
        detailModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };
});

closeModalButton.onclick = (e) => {
    e.preventDefault();
    detailModal.classList.remove("active");
    document.body.style.overflow = "";
};

detailModal.onclick = (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove("active");
        document.body.style.overflow = "";
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        detailModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// klik diluar menu, search form, dan shopping cart untuk menutupnya
document.addEventListener("click", (e) => {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});