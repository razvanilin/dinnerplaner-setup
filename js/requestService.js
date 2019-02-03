class RequestService {
  async getRequest(url, headers) {
    const options = {
      method: 'GET',
      headers: headers,
    };
    let data = await (await (fetch(url, options)
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