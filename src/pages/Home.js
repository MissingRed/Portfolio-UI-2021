import React, { useEffect, useState } from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/Home.css";

const Home = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };

  const [loadingProject, setLoadingProject] = useState(true);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [porcentBar, setPorcentBar] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [event, setEvent] = useState([]);

  const setDate = (fechaString) => {
    var fechaSp = fechaString.split("-");
    var anio = fechaSp[0];
    var mes = fechaSp[1] - 1;
    var dia = fechaSp[2];

    return new Date(anio, mes, dia);
  };

  const getCommits = async (name) => {
    try {
      const url = `https://api.github.com/repos/MissingRed/${name}/commits`;
      const resp = await fetch(url);
      const data = await resp.json();
      setPorcentBar(data[0].commit.message);
    } catch (error) {
      console.log(error);
    }
  };

  const porcent = {
    width: `${porcentBar}`,
  };

  const getEvents = async () => {
    try {
      const url = "https://api.github.com/users/MissingRed/received_events";
      const resp = await fetch(url);
      const data = await resp.json();
      const arrWatch = [];

      data.map((info) => {
        arrWatch.push(info);
        return true;
      });
      setEvent(arrWatch[0]);
      setLoadingEvent(false);
    } catch (error) {
      setNotFound(true);
    }
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
          return setDate(a.fechas) - setDate(b.fechas);
        });
        setRepositories(array.reverse());
        setLoadingProject(false);
        getCommits(array[0].name);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });

    getEvents();
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
              <p>/ Proyecto Actual - {porcentBar}</p>
              <div className="line_porcent">
                <div className="actual_porcent" style={porcent}></div>
              </div>
              {notFound ? (
                "404"
              ) : loadingProject ? (
                "Cargando..."
              ) : (
                <div>
                  <p className="actual_name">{repositories[0].name}</p>
                  <p className="last_name">{repositories[1].name}</p>
                  <p className="last_name">{repositories[2].name}</p>
                </div>
              )}
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
              ) : loadingEvent ? (
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
                          ? "le gustó"
                          : event.type === "CreateEvent"
                          ? "creó"
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
