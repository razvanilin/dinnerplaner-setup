class RequestService {
  async getRequest(url, key) {
    let paramSymbol = "&";
    if (url.indexOf("?") === -1) paramSymbol = "?";
    const newUrl = `${url}${paramSymbol}apiKey=${key}`
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };
    let data = await (await (fetch(newUrl, options)
      .then(res => {
        return res.json()
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    ))
    return data
  }
}
