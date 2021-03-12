import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import imagesGit from "../Data/Images";
import setDate from "../Data/Date";
import GitHubRepos from "../Data/GithubRepos";

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

  const projects = () => {
    setRepositories(GitHubRepos);
    setLoadingProject(false);
    // fetch("https://api.github.com/users/MissingRed/repos")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const array = [];
    //     data.map((rep) => {
    //       if (
    //         rep.name === "Portfolio-UI-2021" ||
    //         rep.name === "MasterPC" ||
    //         rep.name === "CodeShop" ||
    //         rep.name === "gif-expert-app" ||
    //         rep.name === "CodeShopV3" ||
    //         rep.name === "Bush-lol" ||
    //         rep.name === "Preguntados-usc"
    //       ) {
    //         const name = rep.name;
    //         const constdesc = rep.description;
    //         const url = rep.html_url;
    //         const fechas = rep.updated_at.slice(0, -10);
    //         array.push({ fechas, name, constdesc, url });
    //         return true;
    //       }
    //     });
    //     array.sort(function (a, b) {
    //       return setDate(a.fechas) - setDate(b.fechas);
    //     });
    //     setRepositories(array.reverse());
    //     setLoadingProject(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setNotFound(true);
    //   });
  };

  useEffect(() => {
    projects();
    setImages(imagesGit);
  }, []);

  return (
    <>
      <div className="main-home__grid" style={style}>
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-projects__content">
          <Navbar />
          {notFound ? (
            "404"
          ) : loadingProject ? (
            "Cargando..."
          ) : (
            <div className="main-projects">
              <div className="first">
                <span></span>
                <img
                  src={repositories[num].img}
                  alt=""
                  className="first__img"
                />
                <div className="buttonAll">
                  <img src="Img/grid.svg" alt="" className="grid__img" />
                  <p>VER TODOS</p>
                </div>
              </div>
              <div className="second">
                <div className="content__second">
                  <h2>{repositories[num].name}</h2>
                  <p>{repositories[num].date}</p>
                  <div className="description__git">
                    {repositories[num].description}
                  </div>

                  <p className="text__repo_cont">
                    Herramientas: {repositories[num].Tools}
                  </p>
                  {repositories[num].Contributors === "" ? (
                    ""
                  ) : (
                    <p className="text__repo_cont">
                      Colaboradores:{" "}
                      <a href={repositories[num].Contributors}>
                        {repositories[num].ContributorsName}
                      </a>
                    </p>
                  )}
                  <p className="text__repo_cont">
                    Repositorio: <a href={repositories[num].Link}>GitHub</a>
                  </p>
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
