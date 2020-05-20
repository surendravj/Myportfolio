const API = "https://glacial-spire-23369.herokuapp.com/api"

export const saveCommentToDb = (body) => {
    return fetch(`${API}/createcomment`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then(response => {
        return response.json();
    }).catch(e => console.log(e))
};


export const getAllComments = () => {
    return fetch(`${API}/comments`, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(e => console.log(e));
}