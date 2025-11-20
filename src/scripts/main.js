//import { createPlan } from ./main.js
import { Catalog } from "./catalog.js"

//invoke createPlan & store return value to a variable


const catalogHTML = Catalog(harvestedPlants)
document.querySelector(".container").innerHTML = catalogHTML

console.log("Welcome to the main module")

