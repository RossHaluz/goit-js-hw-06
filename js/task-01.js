const allItems = document.querySelectorAll('.item')

console.log(`Number of categories: ${allItems.length}`)

for (let i = 0; i < allItems.length; i += 1){
    const names = allItems[i].querySelector('h2').textContent;
    console.log(`Category: ${names}`);
    const elements = allItems[i].querySelectorAll('ul li').length;
    console.log(`Elements ${elements}`)
}
