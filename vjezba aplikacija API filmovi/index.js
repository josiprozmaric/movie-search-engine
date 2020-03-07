const fetchData = async naredba => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
     apikey: 'd9835cc5',
      s: naredba
    }
  });

  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
  const movies = await fetchData(event.target.value);

  for (let movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h2>${movie.Type} name :</h2>
      <h3>${movie.Title}</h3>
      <h3>YEAR : ${movie.Year}</h3>
    
    `;
         div.style.color = 'blue'
     
    document.querySelector('#target').appendChild(div);
  }
};
input.addEventListener('input', debounce(onInput, 1000));

