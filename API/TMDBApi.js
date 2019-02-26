const API_TOKEN = "6f2ff93154ad80e54b8031b6397ecbd9";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }