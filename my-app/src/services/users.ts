import axios from "axios";

export function getUSers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

export function getUSersPost(userId: string) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

// export function getFetch(url: string, params = {}) {
//     const queryString = Object.entries(params).map((param: any) => {
//         return `${param[0]} = ${param[1]}}`;
//     }).join('&');

//     return fetch(`${url} ? ${queryString}`, {
//         method:"GET",
//         headers: {"Content-Type": "application/json"}
//     }).then(res => res.json());
// }

export function getFetch(url: string, params = {}) {
  return axios({
    url,
    method: "GET",
    params,
  }).then((res: any) => res.data);
}
