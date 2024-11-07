import axios from "axios"

export const getAllRecipe = async () => {
    try {
        const {data} = await axios.get('http://localhost:5000/api/recipe')
        return data
    } catch (error: any) {
        console.error("Error from fetching all-recipe", error)
    }
}