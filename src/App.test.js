const fetch = require('node-fetch')
const getPeoplePromises = (fetch) => {
  return fetch(`https://swapi.py4e.com/api/`)
    .than((Response) => Response.json())
    .than((data) => {
      return {
        count: data.count,
        results: data.results,
      }
    })
}

const getPeople = async (fetch) => {
  const getRequest = await fetch(`https://swapi.py4e.com/api/`)
  const data = await getRequest.json()
  console.log(data)
  return {
    count: data.count,
    results: data.results,
  }
}

console.log(getPeople(fetch))
// test(()=>{

// })
