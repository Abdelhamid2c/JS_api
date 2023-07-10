function getAllUsers() {
    return new Promise(function(resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(response.ok)
                response.json()
            else
                reject("error with users request")
            })
        .then(users => 
            {
                document.getElementById('mini-box').innerHTML = ""
                for(user of users){
                    let content = `
                                    <div id="user" onClick = "userClicked(${user.id},this)">
                                        <h3>${user.name}</h3>
                                        <h3>${user.phone}</h3>
                                    </div>
                                
                    `
                    console.log(user);
                    document.getElementById('mini-box').innerHTML += content;
                 }
            resolve()
        })
    })

    }

    function getAllPosts(id) {
         fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
        .then((response) => response.json())
        .then(posts => 
            {
                document.getElementById('posts').innerHTML = ""
                for(post of posts){
                    let content = `
                                    <div id="box" style="display:contents;">
                                        <div id="mini-box">
                                            <div id="user">
                                                <h2>${post.title}</h2>
                                                <h3>${post.body}</h3>
                                            </div>
                                        </div>
                                    </div>
                    `
                    console.log(post);
                    document.getElementById('posts').innerHTML += content;
            }
        })
        }

        // obtenir users aprés les posts

    getAllUsers().then(function(){
        getAllPosts(1)
    }).catch(function(e){
        console.log(e)
    })





