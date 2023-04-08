const TOKEN: string = process.env.DATO_TOKEN;

export async function cmsService({ query }: {query: string}) {

    try {
        const pageContentResponse = await fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 
                'Authorization': 'Bearer ' + TOKEN,
            }, 
            body: JSON.stringify({
                query
            })
        }).then(async (respostaDoServer) => {
            const body = await respostaDoServer.json();
            if(!body.errors) return body;

            throw new Error(JSON.stringify(body));
        })
    
        return {
            data: pageContentResponse.data,
        }
    } catch(err) {
        throw new Error(err.message);
    }
}
