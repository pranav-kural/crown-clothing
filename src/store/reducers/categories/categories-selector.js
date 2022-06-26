export const selectCategoriesMap = (state) =>
  getCategoriesMap(state.categories.categories);

const getCategoriesMap = (categories) => {
  return categories.reduce((categoriesMap, { title, items }) => {
    categoriesMap[title.toLowerCase()] = items;
    return categoriesMap;
  }, {});
};
