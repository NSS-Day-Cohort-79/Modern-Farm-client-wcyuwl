import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

// export const plantSeeds (year's planting plan as parameter)
export const plantSeeds = (yearlyPlan) => {
    //iterate the plan/ each row
    for (const row of yearlyPlan) {
        for (const cropName of row) {
        //iterate through each crop name in that row
             if (cropName === "Asparagus") {
            //invoke corresponding seed function
            const seed = createAsparagus()
           //add seed to array 
            addPlant(seed)
            }
            else if (cropName === "Corn") {
                const seed = createCorn()
                addPlant(seed)
            } 
            else if (cropName === "Potato") {
                const seed = createPotato()
                addPlant(seed)
            } 
            else if (cropName === "Soybean") {
                const seed = createSoybean()
                addPlant(seed)
            } 
            else if (cropName === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed)
            } 
            else if (cropName === "Wheat") {
                const seed = createWheat()
                addPlant(seed)
            } 
        }
    }   
}        