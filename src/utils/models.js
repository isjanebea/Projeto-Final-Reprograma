
const fakeJson = {
    "name": "Test",
    "description": "Testando se as informações de fato estao passando",
    "foundedAt": "10/06/2021",
    "activityDomain": "Test",
    "ActivitiesAndProjects": [{
        title: "Um titulo",
        description: "Uma descrição sobre o projeto"
    }],
    "Type": "Organizacao",
    "cpnj": 100000

}


const checkSchema = (reference, { body: json, method }) => {
   // refatorar para class
    const add = (key, atributo) => {
        if (json[key]) {
            modelJson[key] = atributo
        }
    }

    const setNotMirror = key => {
        if (reference[key].required) {
            required = true;
            notMirror = {
                mensagem: `Por favor verificar o atributo do JSON em  ${key}`
            }
        }
    }

    if (typeof reference !== 'object' || typeof json !== 'object') return undefined;

    const exception  = ["createdAt", "_id", "id", 'host']
    const referenceKeys = Object.keys(reference).filter(key => !exception .includes(key));
    
    let notMirror = undefined;
    let modelJson = {};
    let required;

    referenceKeys.forEach((key, index) => {
        let jsonAtual = json[key];
        add(key, jsonAtual)
        if (!jsonAtual) setNotMirror(key)

    })

    if (Object.keys(modelJson).length==0) {
        return [false, {
            message : "Por favor, verificar o body"
        }]
    }

    else if (notMirror && required) {
        return [false, notMirror]
    }

    else {
        return [true, modelJson];
    }

}

const verifyJson = (...json) => {
    const newJson = {}

    for (let key of json) {
        let atributo = json[key];
        if (atributo == undefined) {
            return undefined;
        }
        else {
            newJson[key] = atributo
        }
    }

    return newJson;
}


module.exports = { checkSchema, verifyJson }
