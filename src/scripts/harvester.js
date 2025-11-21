export const harvestPlants = (plantToGrow) => {
    //bucket
    const result = []
    //iterate array
    for (const plant of plantToGrow) {
        let outputCount = plant.output
            //if type is corn only take half of output
            if (plant.type === "Corn") {
                outputCount = plant.output / 2
            }
            // push the amount of the output into new array 
            for (let i = 0; i < outputCount; i++) {
            result.push(plant)
        }
    }
    //return new array
return result
}
