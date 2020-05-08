export function compareUsers (user1, user2) {
    let user1Score = 0;
    let user2Score = 0;

    // public repository
    if(user1.public_repos === user2.public_respos) {
        user1Score += 1;
        user2Score += 1;
    } else if (user1.public_repos > user2.public_repos) {
        user1Score += 2;
    } else if (user1.public_repos < user2.public_repos) {
        user2Score += 2;
    }

    // public gits
    if(user1.public_gits === 0 || user2.public_gits === 0) {
        user1Score += 1;
        user2Score += 1;
    } else if (user1.public_gits > user2.public_gits) {
        user1Score += 2;
    } else if (user1.public_gits < user2.public_gits) {
        user2Score += 2;
    }

    // blog
    if(user1.blog === "" && user2.blog === "") {
        user1Score += 1;
        user2Score += 1;
    } else if (user1.blog !== "") {
        user1Score += 2;
    } else if (user2.blog !== "" ) {
        user2Score += 2;
    };

    // hireable
    if(user1.hireable === null && user2.hireable === null) {
        user1Score += 1;
        user2Score += 1;
    } else if (user1.hireable === true) {
        user1Score += 2;
    } else if (user2.hireable === true) {
        user2Score += 2;
    };

    // company 
    if(user1.company === null & user2.company === null) {
        user1Score += 1;
        user2Score += 1;
    } else if(user1.company !== null) {
        user1Score += 2;
    } else if(user2.company !== null) {
        user2Score +=2;
    }

    // followers
    if(user1.followers === user2.followers) {
        user1Score += 1;
        user2Score += 1;
    } else if(user1.followers > user2.followers) {
        user1Score += 2;
    } else if(user1.followers < user2.followers) {
        user2Score += 2;
    }

    // following
    if(user1.following === user2.following) {
        user1Score += 1;
        user2Score += 1;
    } else if(user1.following > user2.following) {
        user1Score += 2;
    } else if(user1.following < user2.following) {
        user2Score += 2;
    }

    return ({
        user1Score,
        user2Score
    })
};