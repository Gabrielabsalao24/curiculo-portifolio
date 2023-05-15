// Vamos adicionar um exemplo de integração com uma API de clima

// Definir a chave da API e a URL do endpoint
const apiKey = "7f971c9dbf7148ceb0422638231505";
const weatherEndpoint = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Pernambuco&lang=pt`;

// Obter o elemento onde iremos exibir o clima
const weatherDisplay = document.getElementById("weather-display");

// Fazer uma requisição para a API de clima
fetch(weatherEndpoint)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    // Exibir o clima na página
    weatherDisplay.textContent = `Em Pernambuco, o tempo está ${condition.toLowerCase()} com temperatura de ${temperature}°C.`;
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao obter o clima:", error);
  });
