import React, { useState, useEffect, useRef } from "react";
import "../styles/Projects.css";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import imagesGit from "../Data/Images";
// import setDate from "../Data/Date";
import GitHubRepos from "../Data/GithubRepos";

const Projects = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };

  const [num, setNum] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [loadingProject, setLoadingProject] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [notFoundAll, setNotFoundAll] = useState(false);

  const [openViewAll, setOpenViewAll] = useState(false);
  const [allRepos, setAllRepos] = useState([]);

  const viewAll = useRef();

  const addNum = () => {
    if (num === 7) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };

  const deleteNum = () => {
    if (num === 0) {
      setNum(7);
    } else {
      setNum(num - 1);
    }
  };

  const handleClose = () => {
    viewAll.current.style.animation = "animation_nav_reverse 0.5s";
    viewAll.current.addEventListener("animationend", () =>
      setOpenViewAll(false)
    );
  };

  const apiRepos = () => {
    fetch("https://api.github.com/users/MissingRed/repos")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.map((rep) => {
          const name = rep.name;
          const url = rep.html_url;
          array.push({ name, url });
          return true;
        });
        setAllRepos(array);
        console.log(array);
        setLoadingAll(false);
      })
      .catch((err) => {
        console.log(err);
        setNotFoundAll(true);
      });
  };
  const projects = () => {
    try {
      setRepositories(GitHubRepos);
      setLoadingProject(false);
    } catch (error) {
      setNotFound(true);
    }
  };

  useEffect(() => {
    apiRepos();
    projects();
    // setImages(imagesGit);
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
                  <button onClick={() => setOpenViewAll(!openViewAll)}>
                    VER TODOS
                  </button>
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
                      <a
                        href={repositories[num].Contributors}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repositories[num].ContributorsName}
                      </a>
                      {repositories[num].Contributors2 !== "" ? " y " : ""}
                      <a
                        href={repositories[num].Contributors2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repositories[num].ContributorsName2}
                      </a>
                    </p>
                  )}
                  <p className="text__repo_cont">
                    Repositorio:{" "}
                    <a
                      href={repositories[num].Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
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
              {openViewAll ? (
                <div className="view-all" ref={viewAll}>
                  <div className="down-container">
                    <img
                      src="Img/down.svg"
                      alt=""
                      className="button-down"
                      onClick={handleClose}
                    />
                  </div>
                  <div className="down-title">
                    <h2>Otros Proyectos</h2>
                  </div>
                  <div className="projects-contianer">
                    <div className="container-grid__items">
                      {allRepos.map((res) => (
                        <p key={res.name}>{res.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
