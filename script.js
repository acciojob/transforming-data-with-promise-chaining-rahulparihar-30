function firstPromise() {
    return new Promise((res, rej) => {
        let num = document.getElementById("ip").value;

        setTimeout(() => {
            if (num !== "") {
                res(num);
            } else {
                rej("Please enter a number");
            }
        }, 2000);
    });
}

function secondPromise(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num * 2);
        }, 2000);
    });
}

function thirdPromise(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num - 3);
        }, 1000);
    });
}

function fourthPromise(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num / 2);
        }, 1000);
    });
}

function fifthPromise(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num + 10);
        }, 1000);
    });
}

function update(nums) {
    document.getElementById("output").innerText = `Result:${nums}`;
}

document.getElementById("btn").addEventListener("click", function () {

    firstPromise()
        .then((num) => {
            update(num);
            return secondPromise(num);
        })
        .then((result) => {
            update(result);
            return thirdPromise(result);
        })
        .then((result) => {
            update(result);
            return fourthPromise(result);
        })
        .then((result) => {
            update(result);
            return fifthPromise(result);
        })
        .then((result) => {
            update(result);
        })
        .catch((err) => {
            alert(err);
        });
});