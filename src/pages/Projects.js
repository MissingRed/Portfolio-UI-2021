import React, { useState, useEffect, useRef } from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import GitHubRepos from "../Data/GithubRepos";
import "../styles/Projects.css";
import setDate from "../Data/Date";

const Projects = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };

  const [loadingRepositories, setLoadingRepositories] = useState(true);
  const [openViewAll, setOpenViewAll] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [allRepos, setAllRepos] = useState([]);
  const [num, setNum] = useState(0);
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
    viewAll.current.style.animation = "animation_all_repos_reverse 0.5s";
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
          const date = rep.updated_at.slice(0, -10);
          array.push({ name, url, date });
          return true;
        });
        setAllRepos(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const projects = () => {
    try {
      setRepositories(GitHubRepos);
      setLoadingRepositories(false);
    } catch (error) {
      setNotFound(true);
    }
  };

  useEffect(() => {
    apiRepos();
    projects();
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
          ) : loadingRepositories ? (
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
                <div
                  className="buttonAll"
                  onClick={() => setOpenViewAll(!openViewAll)}
                >
                  <img src="Img/grid.svg" alt="" className="grid__img" />
                  <button>VER TODOS</button>
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
                    <a
                      href={repositories[num].Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="Img/Git.svg"
                        alt="GitHub"
                        className="git_logo"
                      />
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
                    {allRepos.map((res) => (
                      <a
                        className="repo__container"
                        key={res.name}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="title-repo">
                          <p className="date-repo">{res.date}</p>
                          <p className="name-repo">{res.name}</p>
                        </div>
                        <div className="back">
                          <img src="Img/GitIcon.svg" alt="Git" />
                        </div>
                      </a>
                    ))}
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
