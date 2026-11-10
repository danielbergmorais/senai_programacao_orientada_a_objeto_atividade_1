
export const saveOnStorage = (variable, value) => {

    // Recupera se tiver ja na memoria
    let storage_json = localStorage.getItem(variable)
    let storage_data =  (storage_json) ? JSON.parse(storage_json) : []

    //adiciona novos dados
    storage_data.push(value)
    localStorage.setItem(variable, JSON.stringify(storage_data))
}

export const getFromStorage = (variable) => {
    //recupera os resultados
    let storage_json = localStorage.getItem(variable)
    let storage_data = (storage_json) ? JSON.parse(storage_json) : []

    // retorna a lista
    return storage_data;
} 
