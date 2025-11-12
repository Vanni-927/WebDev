import { serve } from 'bun'

serve({
    fetch(request) {
        const url = new URL(request.url)   //fetching particular url.

        if (url.pathname === '/') {
            return new Response('Hello user', { status: 200 });
        } else if (url.pathname === '/confirmation') {
            return new Response('Confirmed request', { status: 200 });
        } else {
            return new Response('404 NOT FOUND', {status: 404})
        }
    },


    port: 6000,
    hostname: '127.0.0.1'
    //no listening neeeded as serve does all behind the scene.

})