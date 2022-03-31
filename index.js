// Add your code here
function submitData(name, email) {
    const userObj = {
        name: name,
        email: email,
    };


    const configureObj = {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userObj),
    };

    return fetch("http://localhost:3000/users", configureObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const body = document.querySelector(`body`)
            body.textContent = object[`id`]
            console.log(object);
        })
        .catch(function (error) {
            const body = document.querySelector(`body`)
            body.textContent = ""
            alert("Unauthorized Access");
            body.textContent = error[`message`]
            console.log(error.message);
        });
}









// function configureObj(submitData) {
//     fetch(`http://localhost:3000/users`, {
//         method: `POST`,
//         headers: {
//             "Content-Type": "application/json",

//         },
//         body: JSON.stringify(submitData)
//     })
//         .then(res => res.json())
// };

