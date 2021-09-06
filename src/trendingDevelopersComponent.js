import useDevs from './hooks/githubDevs';

const TrendingDevelopersComponent = () => {
    const developers = useDevs();

    return (
        <div className="container">
            <div className="content">
                {developers && developers.data &&
                    developers.data.map((dev) =>
                        <div className="devBox">
                            <div className="developerAvatar">
                                <div className="rankandpic">
                                    <div className="rank">{dev.rank}</div>
                                    <div><img src={dev.avatar} /></div>
                                </div>
                            </div>
                            <div className="devInfo">
                                <div><a href={dev.url}>{dev.name}</a></div>
                                <div>{dev.username}</div>
                            </div>
                            <div className="devInfoRepo">
                                <div><i class="fab fa-gripfire"></i>Popular Repo</div>
                                <div><a href={dev.popularRepository.url}>{dev.popularRepository.repositoryName}</a></div>
                                <div>{dev.popularRepository.description}</div>
                            </div>
                            <div className="activities">
                                <div className="activitiesContainer">
                                    <div><button>Sponsor</button></div>
                                    <div><button>Follow</button></div>
                                </div>
                            </div>
                        </div>
                    )}


            </div>
        </div>

    )
}

export default TrendingDevelopersComponent;