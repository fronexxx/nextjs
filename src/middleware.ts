import {NextRequest, NextResponse} from "next/server";

export const middleware = async (request: NextRequest) => {
    console.log('middleware');
    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');
    // const token = await fetch('', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             key1: login,
    //             key2: password
    //         })
    //     }).then(value => value.json());

    // const token = 'acsyuagbysucg78dtdygadg23dg';
    //
    // const response = NextResponse.next({
    //     headers: {
    //         Authorization: token
    //     }
    // });
    // return response;

    // return new NextResponse('adsgahja', {headers: {'xxx': 'yyy'}});

    if (request.url.startsWith('/auth')) {
        // some actions
    }else if (request.url.startsWith('/api')) {
        //......
    }
};

export const config = {
    matcher: '/auth'
}
