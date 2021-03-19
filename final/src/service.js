
import axios from 'axios';


export async function hello() {
    await axios.get('http://localhost:8080/hello').then(
        res => {
            console.log('connect to node ' + JSON.stringify(res.data));
            // console.log('Hello work ' + res.data.toString() + " " + res.status.toString() + ' ' + res.statusText.toString());
        },
        err => {
            console.log('error connect: ' + err);
        }
    )
}

export async function register(user) {
    JSON.stringify(user)
    console.log(user);
    await axios.post('http://localhost:8080/register', user).then(
        res => {
            console.log('register user ' + JSON.stringify(res.data));
        },
        err => {
            console.log('error register: ' + err);
            alert("can't create user")
        }
    )
}

export async function createDrink(drink) {
    console.log(drink);
    await axios.post('http://localhost:8080/createDrink', drink).then(
        res => {
            console.log('create drink' + JSON.stringify(res.data));
        },
        err => {
            console.log('error create drink: ' + err);
        }
    )
}



