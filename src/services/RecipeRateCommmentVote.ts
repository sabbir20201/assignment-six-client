
export const addComment = async()=>{
    const res = await fetch(`http://localhost:5000/api/recipe/comment`)
    return res.json()
}

