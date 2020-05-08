export async function fetchData(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        return data;
    } 
    catch(error) {
        console.log(error);
    }
};