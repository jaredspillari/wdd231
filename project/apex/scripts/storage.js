export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorite(bike) {
    const favorites = getFavorites();

    if (!favorites.find(f => f.model === bike.model)) {
        favorites.push(bike);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}
