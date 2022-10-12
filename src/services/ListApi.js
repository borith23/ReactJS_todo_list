export function getApi() {
    return fetch(' http://localhost:3030/list_api')
      .then(data => data.json())
}