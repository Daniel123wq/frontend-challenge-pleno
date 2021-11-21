class BaseEntity
{
    url = "http://localhost:3004/"
    endpoint = ""
    method = null
    data = {}
    params = {}
    contentType = ""
    constructor(endpoint, data = {}, params = {}, contentType = 'application/json', method = "GET"){
        this.endpoint = endpoint
        this.method = method
        this.data = data
        this.params = params
        this.contentType = contentType
    }

    async findAll ()
    {
        const res = await fetch(`${this.url+this.endpoint}`)
        return res.json()
    }
    async findOne (id)
    {

    }

    async update (id, data)
    {

    }

    async delete (id)
    {

    }

    async runDefalt()
    {

    }

    setEndpoint(endpoint){
        this.endpoint = endpoint
        return this
    }
}

export default BaseEntity;