// create empty field array
let field = []

// export addPlant function that pushes seed object to the array
export const addPlant = (toPlant) => {
    // check if toPlant is array because of corn
    if (Array.isArray(toPlant)) {
        // loop through array and push seeds to field
        toPlant.forEach(seed => field.push(seed))
    } else {
        // push seed to field array
        field.push(toPlant)
    }
}

//export usePlants function that returns copy of plants array
export const usePlants = () => structuredClone(field)

