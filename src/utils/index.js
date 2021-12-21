// This function has  a lot of the commonly used util functions

const getAPIPage = (pageNum) => {
    return fetch("https://rickandmortyapi.com/api/character/?page="+pageNum)
    .then((response) => {
        return response.json()
    })
}

export {getAPIPage}