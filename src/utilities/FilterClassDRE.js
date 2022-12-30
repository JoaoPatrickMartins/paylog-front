export const FilterClassDRE =(requests, class_dre) => {
   
    requests = class_dre ? ( requests.filter(result => {
        return result.class_dre === class_dre;
    })) : requests;

    return requests
}

