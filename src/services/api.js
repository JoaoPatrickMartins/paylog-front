import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const createSession = async (email, password) => {
    return api.post("/sessions", { email, password });
}

export const getRequests = async(userId, query) => {
    let url = `/users/${userId}/requests/`

    if(query !== '') {
        url += `?q=${query}`;
    }

    return api.get(url);
}

export const getRequest = async(userId, requestId, query) => {
    let url = `/users/${userId}/requests/${requestId}`

    if(query !== '') {
        url += `?q=${query}`;
    }

    return api.get(url);
}

export const createRequest = async(userId, title, value, origin_id, request_date, due_date, class_dre, subclass_dre, request_observation, requester_name, job_position, company, approver_name ) => {
    const url = `/users/${userId}/requests/`;
    
    return api.post(url, { 
        title: title,
        value: value,
        origin_id: origin_id,
        request_date: request_date,
        due_date: due_date,
        class_dre: class_dre,
        subclass_dre: subclass_dre,
        request_observation: request_observation,
        requester_name: requester_name,
        job_position: job_position,
        company: company,
        status: "Pendente",
        approver_name: approver_name
    })
}

export const editRequestStatus = async(userId, requestId, status, approver_name) => {
    const url = `/users/${userId}/requests/${requestId}`;
    
    return api.put(url, { 
        
        status: status,
        approver_name: approver_name
    })
}

export const editRequest = async(userId, requestId, title, value, origin_id, request_date, due_date, class_dre, subclass_dre, request_observation ) => {
    const url = `/users/${userId}/requests/${requestId}`;
    
    return api.put(url, { 
        title: title,
        value: value,
        origin_id: origin_id,
        request_date: request_date,
        due_date: due_date,
        class_dre: class_dre,
        subclass_dre: subclass_dre,
        request_observation: request_observation
    })
}

export const destroyRequest = async (userId, id) => {
    const url = `/users/${userId}/requests/${id}`;
    
    return api.delete(url);
}