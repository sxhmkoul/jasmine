import axios from 'axios';
import { FACTS_COLLECTION_ID } from '../helper/constants';

export function fetchConfig(){
    console.log(process.env);
    return axios.get(`${process.env.VUE_APP_PEXELS_BASE_URL}/v1/collections/${FACTS_COLLECTION_ID}`,{
        headers: {
          Authorization: `${process.env.VUE_APP_PEXELS_API_KEY}`
        }
      });
}

export default fetchConfig;