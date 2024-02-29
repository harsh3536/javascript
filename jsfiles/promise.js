const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Async task is complate.");
        resolve()
    }, 1000)
})


promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 Complated");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Harsh", age: 20 })
    }, 1000)
}).then(function (item) {
    console.log(item);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Harsh", password: 123 })
        }
        else {
            reject("error : Something went wrong!")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The Promise is either resolved or rejected");
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ course: "js", price: 2999 })
        } else {
            reject("The Error are runnig")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

