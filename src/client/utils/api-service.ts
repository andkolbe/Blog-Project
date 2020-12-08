export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    try {
        const res = await fetch(uri, {
            method, // es6 shorthand. we don't have to write method: method,
            headers,
            body: JSON.stringify(body)
        })
        if (res.ok) {
            return <T>await res.json();
        }
    } catch (error) {
        console.log(error);
    }
};

// uri is the underlying network architecture that encompasses the url. written similar to a serial number

// method: GET, POST, PUT, DELETE
// fetch defaults to GET if your request isn't specified, so we can code in the same thing here

// body is optional because GET and DELETE requests don't need a body