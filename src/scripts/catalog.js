export const Catalog = (plants) => {
   let plantCatalog = ""

   for (const plant of plants) {
      plantCatalog += `<section class="plant">${plant.plantName}</section>`
   }

   //console.log(plantCatalog)
}