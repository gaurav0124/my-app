import axios from "axios";
import { useQuery } from "react-query";


export default function useDevs(){
    return useQuery("gitHubDevs",() => axios.get('/developers').then((res) => res.data));
};

