const main =async (url)=>{
    try{
        const response = await fetch (url)
        const data = await response.json()

        return [data,null]

    }catch(error){
        return[null,error]
    }
}
const fetchdata =async ()=>{
    const [response,error] = await main("https://dummyjson.com/products")
    if(response){
        console.log(response)

        
    }
    else{
        console.log('error')

        
    }
}
fetchdata()