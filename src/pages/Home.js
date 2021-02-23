import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import background from "../pages/background.jpg";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };
  const [repositories, setRepositories] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const convertirFecha = (fechaString) => {
    var fechaSp = fechaString.split("-");
    var anio = fechaSp[0];
    var mes = fechaSp[1] - 1;
    var dia = fechaSp[2];

    return new Date(anio, mes, dia);
  };
  const getCommit = (name) => {
    fetch(`https://api.github.com/repos/MissingRed/${name}/commits`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    fetch("https://api.github.com/users/MissingRed/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        const array = [];
        data.map((rep) => {
          const name = rep.name;
          const fechas = rep.updated_at.slice(0, -10);
          array.push({ fechas, name });
        });
        array.sort(function (a, b) {
          return convertirFecha(a.fechas) - convertirFecha(b.fechas);
        });
        setRepositories(array.reverse());
        setLoading(false);
        getCommit(array[0].name);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, []);

  return (
    <>
      <div className="main-home__grid" style={style}>
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-home__content">
          <Navbar />
          <div className="main-home__container_info">
            <div className="informaion">
              <div className="actual_proyect">
                <p>/ Proyecto Actual</p>
                <div className="line_porcent">
                  <div className="actual_porcent"></div>
                </div>
                <p className="actual_name">
                  {notFound
                    ? "404"
                    : loading
                    ? "Cargando..."
                    : repositories[0].name}
                </p>
                <p className="last_name">
                  {notFound
                    ? "404"
                    : loading
                    ? "Cargando..."
                    : repositories[1].name}
                </p>
                <p className="last_name">
                  {notFound
                    ? "404"
                    : loading
                    ? "Cargando..."
                    : repositories[2].name}
                </p>
              </div>
              <div className="presentation">
                <h1>Hola soy Daniel!</h1>
                <h1>Desarrollador Web</h1>
                <div className="textinformation">
                  <p>
                    Presentando mi colección de trabajo, una serie de proyectos
                    personales que me han llevado hasta este punto.
                  </p>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="liked">
                <p className="title">ME GUSTAS DE GITHUB </p>
                <div className="public">
                  <img src="Img/user.jpg" alt="User" />
                  <p className="name">Jhon Smith</p>
                </div>
                <div className="post">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae voluptas praesentium incidunt non ut earum,
                  recusandae nisi.
                </div>
              </div>
              <div className="proyectView">
                <div className="imgProyect">
                  <img src="Img/Mockup.png" alt="Mockup" />
                </div>
                <div className="informationProyect">
                  <div>
                    <p className="title">CODESHOP</p>
                    <p className="description">
                      CodeShop es una tienda Online de venta de videojuegos en
                      formato digital
                    </p>
                  </div>
                  <p className="read_More">Leer Mas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
