
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
   
    const add = (key, atr) => {
        if (json[key]) {
            modelJson[key] = atr
        }
    }

    const setNotMirror = key => {
        if (reference[key].required) {
            required = true;
            notMirror = {
                mensagem: `Por favor verificar o atributo do JSON >  ${key}`
            }
        }
    }

    if (typeof reference !== 'object' || typeof json !== 'object') return undefined;

    const keysRestritas = ["createdAt", "_id", "id", 'host']
    const referenceKeys = Object.keys(reference).filter(key => !keysRestritas.includes(key));
    const jsonKeys = Object.keys(json);
    
    let notMirror = undefined;
    let modelJson = {};
    let required;

    referenceKeys.forEach((key, index) => {
        let jsn = json[key];
        add(key, jsn)
        if (!jsn) setNotMirror(key)

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



module.exports = { checkSchema }
