import axios from "axios";

export const FetchApi = async () => {
  try {
    const response = await axios.get(
      "http://petstore-demo-endpoint.execute-api.com/petstore/pets"
    );
    return response.data;
  } catch (Error: any) {
    console.error("Erro na chamada da API:", Error.message);
    throw Error; // Lança o erro para que o chamador possa tratá-lo, se necessário.
  }
};
