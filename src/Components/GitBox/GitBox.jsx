import octokit from '../Hooks/useOctokit';
import { parseISO } from 'date-fns';


async function getUserData(){
    const response = await octokit.request('GET /repos/Davicpls/react_portfolio/commits');

    const dateTime = response.data[0]['commit']['author']['date']
    const parsedDateTime = parseISO(dateTime)

    return parsedDateTime
  }
  
  getUserData();