const getAuthors = async () => {
    try {
        const res = await fetch('/api/authors');
        if (res.ok) { // .ok comes from fetch. res.ok is a boolean. False is 404, 401, 500, not found, etc
            return await res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAuthors
}