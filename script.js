function fetchData() {

    let user1 = document.getElementById("user-name1")
    let user2 = document.getElementById("user-name2")
    let user3 = document.getElementById("user-name3")
    let user4 = document.getElementById("user-name4")
    let user5 = document.getElementById("user-name5")
    fetch("https://raw.githubusercontent.com/suyogshiftcare/jsontest/main/available.json")
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            const user = data.filter(user => {
                
                return `<p>Name: ${user.name}</p>`
            })
            console.log(user);
            user1.innerHTML = user[1].name;
            user2.innerHTML = user[4].name;
            user3.innerHTML = user[8].name;
            user4.innerHTML = user[13].name;
            user5.innerHTML = user[19].name;
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
        
}


fetchData();