import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub = () => {
  const { githubState, getUser } = useContext(GithubContext);
  
  return { githubState, getUser };
}

export default useGithub;