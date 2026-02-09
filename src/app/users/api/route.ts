export const GET = async (request: Request, response: Response) => {

    console.log("GET request route handler")
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());

    console.log(request)
    console.log(response)

    // response.headers.set('XXX', 'asdqwe')
    return Response.json(users)
}

export const POST = () => {
    console.log("GET request route handler")
    return Response.json({message: 'request route handler POST'})

}
