const baseUrl = "http://localhost:8080/api/";

let apiUrlService = (serviceName) => `${baseUrl}${serviceName}/`;


async function createOrder(data) {
    console.log(data);
    const response = await fetch(apiUrlService("createorder"), {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify({order: data})
    })
    return await response.json();
}

export default { createOrder }