import axios from 'axios';

export default axios.create({
  baseURL: "https://us.api.blizzard.com/data/wow/pvp-season/34/pvp-leaderboard/shuffle-warrior-arms?namespace=dynamic-us&locale=en_US&access_token=USoOuiK5ESgPAmF4HdnvxjfdmAg5aepBxP"
});