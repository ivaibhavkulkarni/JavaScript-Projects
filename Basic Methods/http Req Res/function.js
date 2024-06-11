// Get HTTP request from server 

/*
let options = {
    method: "GET"
}

fetch("URL",options);


// Posting HTTP request to server  

let data = {
    name:"Vaibhav Kulkarni",
    gender:"male",
    email:"vaibhav.kulkarni0359@gmail.com",
    status: "Active"
}

let option = {
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer 601811742abaf96399830214ef6444e32aeaf0d0ea042ca21e7c07f710c0c15f",
    },
    body: JSON.stringify(data),
};

fetch("https://gorest.co.in/public/v2/users", option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        console.log(jsondata);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });

*/

// Put HTTP request nothing but editing or updating the existing resource

/*
let data = {
    name: "vaibhav Kulkarni VK"
}


let option = {
    method : "PUT",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer 601811742abaf96399830214ef6444e32aeaf0d0ea042ca21e7c07f710c0c15f",
    },
    body:JSON.stringify(data),
};


fetch("https://gorest.co.in/public/v2/users/6958709", option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        console.log(jsondata);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });


*/


// Delete a web resource from server

let option = {
    method : "DELETE",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer 601811742abaf96399830214ef6444e32aeaf0d0ea042ca21e7c07f710c0c15f",
    },
};

fetch("https://gorest.co.in/public/v2/users/6958709", option)
    .then(function(response) {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(function(jsondata) {
        console.log(jsondata);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });


