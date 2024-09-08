const baseUrl = process.env.BASE_URL;

export const getPosts = async () => {
  try {
    const response = await fetch(`${baseUrl}/posts?select=*`, {
      headers: {
        apikey: `${process.env.API_KEY}`,
        Authorization: `Bearer ${process.env.AUTH}`
      },
      next: { revalidate: 180 }
    });

    return response.json();
  } catch (error) {
    console.error("Erro ao obter os dados da API", error);
  }
}

export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/posts?id=eq.${id}`, {
      headers: {
        apikey: `${process.env.API_KEY}`,
        Authorization: `Bearer ${process.env.AUTH}`
      }
    });

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error("Erro ao obter os dados da API pelo ID", error)
  }
}