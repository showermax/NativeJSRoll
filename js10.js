// Promises


function delay (ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),ms)
    })
}

console.log(delay(1000))
delay(3000).then(()=>console.log('resolve'))


async function getData () {
    const result = fetch('https://www.google.com/search?q=hello')
}