export const getGifs = async (categoria) => {
    const URL =
    `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&api_key=wzIzckHKMwb6qHQ6Nr69jBCUpL3Kp6Gy&limit=10`;

    const respuesta = await fetch(URL);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
        type: img.type,
      };
    });

    return gifs;
  };

