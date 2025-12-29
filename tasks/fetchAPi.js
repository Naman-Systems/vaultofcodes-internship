let options = {
    method: 'POST',
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),

}


fetch('https://jsonplaceholder.typicode.com/posts',options)
  .then((response) => response.json())
  .then((json) => console.log(json));