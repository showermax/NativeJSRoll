// Promises


function delay (ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),ms)
    })
}

console.log(delay(1000))
delay(3000).then(()=>console.log('resolve'))


const getData = async () => {
    const result = await fetch('https://www.google.com/search?q=hello')
    console.log(result.url)
}
getData ()
