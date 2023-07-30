const ulCategories = document.querySelector("#categories");
const liItems = ulCategories.querySelectorAll(".item");
// console.log(`li items: ${liItems.length}`);

liItems.forEach((item) => {
    const titleH2 = item.querySelector("h2").textContent;
    const liItemsTwo = item.querySelectorAll("li").length;
    console.log(`Category: ${titleH2}`);
    console.log(`Elements: ${liItemsTwo}`);
})
