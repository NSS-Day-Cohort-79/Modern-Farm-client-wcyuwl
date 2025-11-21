const catalogToHTML = document.querySelector('.container')

export const Catalog = (plants) => {
   let plantCatalog = ""

   for (const plant of plants) {
      plantCatalog += `<section class="plant">${plant.type}</section>\n`
   }
   
   catalogToHTML.innerHTML = plantCatalog
   //console.log(catalogToHTML)

}