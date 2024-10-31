import envConfig from "@/src/config/envConfig"

const GetAllUser = async()=>{
    console.log(envConfig.baseApi);
    
    const res = await fetch(`http://localhost:5000/api/auth/6708ef389f0cb8d52cfe5c51`)

    return res.json()
}

export default GetAllUser