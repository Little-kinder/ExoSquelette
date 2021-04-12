const baseUrl = "http://localhost:8080/api/";

let apiUrlService = (serviceName) => `${baseUrl}${serviceName}/`;

async function getAllDesigns() {

    const response = await fetch(apiUrlService('designs'));
    return await response.json();
}

async function getAllDesignsParameters() {

    const response = await fetch(apiUrlService('designsTypes'));
    return await response.json();
}

async function createDesign(data) {
    const response = await fetch(apiUrlService("designItem"), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({designItem: data})
      })
    return await response.json();
}

async function getDesignTypeStock(designtype_id) {
    const response = await fetch(`${apiUrlService('designTypeStock')}${designtype_id}`);
    return await response.json();
}


function model3dUrl(namefile) {
    return `${apiUrlService("stl")}/${namefile}.stl`
}

export default {createDesign, getAllDesignsParameters, model3dUrl, getAllDesigns, getDesignTypeStock}