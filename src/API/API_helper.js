const API = "https://forsurendra.herokuapp.com/api";



export const saveCommentToDb = (body) => {
    return fetch(`${API}/post`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: 'no-cors',
        body: JSON.stringify(body),
    }).then(response => {
        return response.json();
    }).catch(e => console.log(e))
};

export const getAllComments = () => {
    return fetch(`${API}/get`, {
        method: "Get",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => {
        return response.json();
    }).catch(e => console.log(e));
};