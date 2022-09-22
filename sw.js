self.addEventListener('install', (event) => {
    console.log('SW: install')
});

/*self.addEventListener('fetch', (event) => {
    console.log(event)
    //event.respondWith(fetch(event.request))
    if (event.request.url.includes("css")) {
        console.log(event.request.url)
    }
})*/

/*self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('style.css')) {
        console.log(event.request.url);
        const resp = new Response(
            `body{
                color: red;
                background-color: #000
            }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        );
        event.respondWith(resp)
    }
})*/




self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('img1.jpg')) {
        const foto = fetch('images/img2.jpg')
        event.respondWith(foto)
    }

});





/*self.addEventListener('fetch', (event) => {
    const respuesta = fetch(event.request.url)
    .then((resp) => {
        //console.log(resp);
        if(resp.ok){
            return resp;
        }else{
            return('images/img2.jpg')
        }
    })
    .catch((error) => {
        console.error(error)
    })

    event.respondWith(respuesta);
})*/

