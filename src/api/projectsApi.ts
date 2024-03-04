import axios from "axios";

const url = "https://api.github.com";

export async function fetchProjects(
  text: string,
  perPage: number,
  page: number
) {
  return (
    await axios.get(
      url + `/search/repositories?q=${text}&per_page=${perPage}&page=${page}`
    )
  ).data;
}

export async function fetchProjectById(id: number) {
  return (await axios.get(url + `/repositories/${id}`)).data;
}
