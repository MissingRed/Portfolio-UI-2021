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
  const [event, setEvent] = useState([]);

  const [porcent1, setporcent1] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

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
        setporcent1(data[0].commit.message);
      });
  };

  const porcent = {
    width: `${porcent1}`,
  };

  const eventsGithub = () => {
    fetch("https://api.github.com/users/MissingRed/received_events")
      .then((res) => res.json())
      .then((data) => {
        const arrWatch = [];
        data.map((info) => {
          arrWatch.push(info);
          return true;
        });
        setEvent(arrWatch[0]);
        setLoading1(false);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  };

  useEffect(() => {
    fetch("https://api.github.com/users/MissingRed/repos")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.map((rep) => {
          const name = rep.name;
          const fechas = rep.updated_at.slice(0, -10);
          array.push({ fechas, name });
          return true;
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

    eventsGithub();
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
            <div className="actual_proyect">
              <p>/ Proyecto Actual - {porcent1}</p>
              <div className="line_porcent">
                <div className="actual_porcent" style={porcent}></div>
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
            <div className="liked">
              {notFound ? (
                "404"
              ) : loading1 ? (
                "Cargando..."
              ) : (
                <div className="public__content">
                  <p className="title">EVENTOS</p>
                  <div className="public">
                    <img src={event.actor.avatar_url} alt="User" />
                    <div className="infoRep">
                      <p className="name">
                        {event.actor.display_login}{" "}
                        {event.type === "CommitCommentEvent"
                          ? "Commit"
                          : event.type === "WatchEvent"
                          ? "Le gustó"
                          : event.type === "CreateEvent"
                          ? "Creo"
                          : event.type === "ForkEvent"
                          ? "Fork"
                          : event.type === "PublicEvent"
                          ? "hizo público"
                          : ""}
                      </p>
                      <p className="dateRepo">{event.created_at}</p>
                    </div>
                  </div>
                  <div className="post">
                    <p className="titleRepo">Repositorio:</p> {event.repo.name}
                  </div>
                </div>
              )}
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
    </>
  );
};

export default Home;
