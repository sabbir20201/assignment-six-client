import envConfig from "@/src/config/envConfig";

const GetSingleRecipeDetails = async (id: string) => {
  console.log(envConfig.baseApi);

  const res = await fetch(
    `http://localhost:5000/api/recipe/${id}`, {
      cache: 'no-store'
    },
  );

  return res.json();
};

export default GetSingleRecipeDetails;
