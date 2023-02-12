// import './App.css';

import { useState } from 'react';

function App() {

  const [city, setCity] = useState("Osasco")

  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }


  const handleSearch = () => {


    fetch(`http://api.weatherapi.com/v1/current.json?key=fc9df67e3f6b4fadb8a153948230202&q=${city}&lang=pt`
    ).then((response) => {
      // console.log('response', response);
      if (response.status === 200) {
        return response.json()
      }
    })
      .then((data) => {
        console.log('Data: ', data)
        setWeatherForecast(data)
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white">
          Miguel Previsão do tempo
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron bg-info">
          <h1>Verifique agora a previsão do tempo da sua cidade</h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e clique em pesquisar
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                placeholder='Exemplo: Osasco'
                value={city}

              />
            </div>

          </div>

          <button onClick={handleSearch} className="btn btn-primary">
            Pesquisar
          </button>

          {
            weatherForecast ? (
              <div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={weatherForecast.current.condition.icon} alt="Icon" />
                  </div>

                  <div>
                    <div>
                      <h3>{weatherForecast.current.feelslike_c}°</h3>
                    </div>
                  </div>

                </div>
              </div>
            ) : null
          }

        </div>
      </main>

    </div>
  );
}

export default App;
