const promisedData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("sucessful")
        } else {
            reject("Failed")
        }
    }, 2000)
})

// promisedData
// .then((res) => {return res}
// )
// .then((res) => console.log(res)
// )
// .catch((err) => console.log(err)
// ).finally(()=> {
//     console.log("Finally o");
// })

const promisedDataAsync = async () => {
   try {
  const asyncResult =   await new Promise((resolve) => {
         setTimeout(() => { resolve("sucessful", 2000) })
     })
     console.log(asyncResult);
     
   } catch (error) {
    console.log(error.name);
    
   }finally{
    console.log("done");
    
   }
}

promisedDataAsync();


const func = async () => {
    const result = await smallChild()

    console.log(result);
    
}