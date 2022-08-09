function saveLocal(key, data, object = true) {
    window.localStorage.setItem(key, 
                                    object 
                                    ? JSON.stringify(data) 
                                    : data
                            );
}

function loadLocal(key, object=true) {
  const informations = window.localStorage.getItem(key);

  if (object) 
    return JSON.parse(informations);

  return informations;
}

export {
    saveLocal,
    loadLocal
}