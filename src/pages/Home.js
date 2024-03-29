import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TwitterPicker } from "react-color";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import setDate from "../Data/Date";
import GitHubRepos from "../Data/GithubRepos";
import "../styles/Home.css";
const Home = () => {
  const [repositoriesLocal, setRepositoriesLocal] = useState([]);
  const [loadingProject, setLoadingProject] = useState(true);
  const [notFoundData, setNotFoundData] = useState(false);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [porcentBar, setPorcentBar] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [slider, setSlider] = useState(0);
  const [event, setEvent] = useState([]);
  const [blockPickerColor, setBlockPickerColor] = useState("#000000");

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

  const projects = () => {
    try {
      setRepositoriesLocal(GitHubRepos);
      setLoadingData(false);
    } catch (error) {
      setNotFoundData(true);
    }
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

  const timeOut = (num) =>
    setTimeout(() => {
      if (num >= 4) {
        setSlider(0);
        timeOut(slider + 1);
      } else {
        setSlider(num);
        timeOut(num + 1);
      }
    }, 7000);

  useEffect(() => {
    document.body.style.background = blockPickerColor;
    fetch("https://api.github.com/users/MissingRed/repos")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.map((rep) => {
          const name = rep.name;
          const constdesc = rep.description;
          const fechas = rep.updated_at.slice(0, -10);
          array.push({ fechas, name, constdesc });
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
    projects();
    timeOut(1);
    // return () => {
    //   setRepositories([
    //     { name: "Cargando" },
    //     { name: "Cargando" },
    //     { name: "Cargando" },
    //   ]);
    // };
  }, [blockPickerColor]);

  return (
    <>
      <div className="main-home__grid">
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-home__content">
          <Navbar />
          <div className="main-home__container_info">
            <div className="actual_proyect">
              <div>
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
                <br />
                <TwitterPicker
                  color={blockPickerColor}
                  onChange={(color) => {
                    setBlockPickerColor(color.hex);
                  }}
                />
              </div>
            </div>
            <div className="presentation">
              <div>
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
            {notFoundData ? (
              "404"
            ) : loadingData ? (
              "Cargando..."
            ) : (
              <div className="proyectView">
                <div className="imgProyect">
                  <img src={repositoriesLocal[slider].img} alt="Mockup" />
                </div>
                <div className="informationProyect">
                  <div>
                    <div>
                      <p className="title">{repositoriesLocal[slider].name}</p>
                      <p className="description">
                        {repositoriesLocal[slider].description}
                      </p>
                    </div>
                  </div>
                  <Link
                    className="read_More"
                    to={{
                      pathname: "Projects",
                      state: slider,
                    }}
                  >
                    Leer Mas
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
