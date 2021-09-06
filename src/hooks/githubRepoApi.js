import axios from "axios";
import { useQuery } from "react-query";

// export const getGithubTrendingRepos = () => {
//    return ;
    
// }

export default function useRepos(){
    return useQuery("gitHubRepos",() => axios.get('/repositories').then((res) => res.data));
};

