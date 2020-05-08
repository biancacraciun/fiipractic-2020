export const capitalized = (name) => {
    let newName = [];
    if(name === "" || name === null) {
        return "No name";
    } else {
    const withoutSpaces = name.trim();
        const nameArr = withoutSpaces.split(" ");
        nameArr.map(firstAndLastName => {
            const capitalize = firstAndLastName.slice(0, 1).toUpperCase();
            return newName.push(capitalize.concat(firstAndLastName.slice(1).toLowerCase()));
        })
    }
   return newName.join(" ")
};