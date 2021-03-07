import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Projects = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };

  const [num, setNum] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [images, setImages] = useState([]);

  const [loadingProject, setLoadingProject] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const addNum = () => {
    if (num === 6) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };

  const deleteNum = () => {
    if (num === 0) {
      setNum(6);
    } else {
      setNum(num - 1);
    }
  };

  const setDate = (fechaString) => {
    var fechaSp = fechaString.split("-");
    var anio = fechaSp[0];
    var mes = fechaSp[1] - 1;
    var dia = fechaSp[2];

    return new Date(anio, mes, dia);
  };

  const projects = () => {
    fetch("https://api.github.com/users/MissingRed/repos")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.map((rep) => {
          const name = rep.name;
          const constdesc = rep.description;
          const url = rep.html_url;
          const fechas = rep.updated_at.slice(0, -10);
          array.push({ fechas, name, constdesc, url });
          return true;
        });
        array.sort(function (a, b) {
          return setDate(a.fechas) - setDate(b.fechas);
        });
        setRepositories(array.reverse());
        setLoadingProject(false);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  };

  useEffect(() => {
    projects();
    setImages([
      "https://repository-images.githubusercontent.com/341706388/1fb2ac80-7ed1-11eb-81d6-ec6ad9b24c21",
      "https://repository-images.githubusercontent.com/344655480/981a6d00-7ed3-11eb-91e6-aa70c107b186",
      "https://repository-images.githubusercontent.com/312438893/addc6200-7ed4-11eb-9e02-2e2fad688bdc",
      "https://repository-images.githubusercontent.com/342668568/62798200-7edb-11eb-9fb8-258ded4dd0bd",
      "https://repository-images.githubusercontent.com/336101675/edf31300-7edb-11eb-8183-caf5773e6b73",
      "https://repository-images.githubusercontent.com/345266973/fbf56380-7edc-11eb-85a1-23b7ee5a996f",
      "https://repository-images.githubusercontent.com/313143497/7c699380-7ee0-11eb-8052-1221ba6fe82d",
    ]);
  }, []);
  return (
    <>
      <div className="main-home__grid" style={style}>
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-projects__content">
          <Navbar />
          <div className="main-projects">
            <div className="first">
              <span></span>
              <img src={images[num]} alt="" className="first__img" />
              <div className="buttonAll">
                <img src="Img/grid.svg" alt="" className="grid__img" />
                <p>VER TODOS</p>
              </div>
            </div>
            <div className="second">
              <div className="content__second">
                <div>
                  {notFound ? (
                    "404"
                  ) : loadingProject ? (
                    "Cargando..."
                  ) : (
                    <div>
                      <h2>{repositories[num].name}</h2>
                      <p>{repositories[num].fechas}</p>
                      <div className="description__git">
                        {repositories[num].constdesc}
                      </div>
                      <p className="text__repo_cont">
                        Repositorio: <a href={repositories[num].url}>GitHub</a>
                      </p>
                      {/* <p className="text__repo_cont">Contribuyentes: </p> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="buttons__project">
                <button className="ant_next__button" onClick={deleteNum}>
                  <img src="Img/left.svg" alt="" />
                  PREV
                </button>
                <button className="ant_next__button" onClick={addNum}>
                  NEXT
                  <img src="Img/right.svg" alt="" />
                </button>
                {/* 
                <div className="ant_next__button"></div>
                <div className="ant_next__button"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
