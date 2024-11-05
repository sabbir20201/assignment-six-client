

const GetSingleUserRecipe= async(id: string)=>{

    const res = await fetch(`http://localhost:5000/api/recipe/${id}`, {
        cache: 'force-cache'
    })

    return res.json()
}

export default GetSingleUserRecipe