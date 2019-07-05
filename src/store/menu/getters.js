export function sideMenu(state) {
  return state.sideDrawer;
}

export function initialCategory(state) {
  return [...state.sideDrawer]
    .sort((a, b) => a.id - b.id)
    .filter(m => m.isFavorite);
}
