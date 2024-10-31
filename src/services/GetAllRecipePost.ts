import envConfig from "@/src/config/envConfig"

const GetAllRecipePost = async()=>{
    console.log(envConfig.baseApi);
    
    const res = await fetch(`http://localhost:5000/api/recipe`, )

    return res.json()
}

export default GetAllRecipePost

// {
//     cache: 'no-store'
// }