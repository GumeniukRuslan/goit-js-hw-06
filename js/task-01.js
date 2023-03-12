const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;
const categoryTitles = document.querySelectorAll('.item h2')
const categoryElements = categoriesList.querySelectorAll('ul')

console.log(`Number of categories: ${categories.length}`)
Array.from(categories).forEach((el, idx = 0) => {
  console.log(`Category: ${categoryTitles[idx].textContent}\nElements: ${categoryElements[idx].children.length}`);
  idx +=1;
});

