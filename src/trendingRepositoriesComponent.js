import useRepos from './hooks/githubRepoApi';


const TrendingRepositoriesComponent = () => {
  const repos = useRepos();

  return (
    <div className="container">
      <div className="content">
        {repos && repos.data &&
          repos.data.map((repo) =>
            <div>
              <div className="repoAuthName">
                <a href={repo.url}><h1>{repo.username}/<span className="bold">{repo.repositoryName}</span></h1></a>
              </div>
              <div className="repoDescription">
                {repo.description}
              </div>
              <div className="repoDetails">
                <div className="language">{repo.language}</div>
                <div className="totalStarts"><i class="far fa-star"></i>{repo.totalStars}</div>
                <div className="forks"><i class="fas fa-code-branch"></i>{repo.forks}</div>
                <div className="builtBy">

                  <div className="builtContainer">
                    <div className="builtText">Built By </div>
                    {repo.builtBy.map((item =>
                      <div><a href={item.url}><img src={item.avatar}></img></a></div>
                    ))}

                  </div>

                </div>
              </div>
            </div>
          )}


      </div>
    </div>

  )
}

export default TrendingRepositoriesComponent;