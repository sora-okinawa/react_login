export const fetch_Fnc = async (url, data) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(Response => Response.json())
      .then(data => data)
      .catch(err => err)
  }
  