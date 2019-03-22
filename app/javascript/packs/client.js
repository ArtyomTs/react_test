const client = {
  getData: (query) => {
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(query)
    })
    .then(r => r.json())
  }
}

export default client
