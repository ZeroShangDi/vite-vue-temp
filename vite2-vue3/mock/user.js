export default {
    url: '/api/createUser',
    method: 'get',
    response: ({ body }) => {
        console.log(body)
        return {
            code: 0,
            message: 'ok',
            data: 'admin'
        }
    }
}