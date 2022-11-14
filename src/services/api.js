import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const createSession = async (email, password) => {
    return api.post("/sessions", { email, password });
}

export const getRequests = async(userId, query) => {
    let url = `/users/${userId}/requests/`

    if(query !== '') {
        url += `?${query}`;
    }

    return api.get(url);
}

export const getRequest = async(userId, requestId, query) => {
    let url = `/users/${userId}/requests/${requestId}`

    if(query !== '') {
        url += `?${query}`;
    }

    return api.get(url);
}

export const getRequestsPending = async(userId, requestId, query) => {
    let url = `/users/${userId}/requests/peding`

    if(query !== '') {
        url += `?${query}`;
    }

    return api.get(url);
}

export const getRequestsSupervisor= async(userId, requestId, query) => {
    let url = `/users/${userId}/requests/supervisor`

    if(query !== '') {
        url += `?${query}`;
    }

    return api.get(url);
}

export const createRequest = async(userId, title, value, origin_id, request_date, due_date, class_dre, subclass_dre, request_observation ) => {
    const url = `/users/${userId}/requests/`;
    
    return api.post(url, { 
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

export const editRequestStatus = async(userId, requestId, status, approver_name, forwardSupervisor , checked) => {
    const url = `/users/${userId}/requests/${requestId}`;
    
    return api.put(url, { 
        
        status: status,
        approver_name: approver_name,
        forward_to_supervisor: forwardSupervisor,
        checked: checked
    })
}

export const editRequestChecked = async(userId, requestId, checked) => {
    const url = `/users/${userId}/requests/${requestId}`;
    
    return api.put(url, { 
        checked: checked
    })
}

export const editRequestSupervisor = async(userId, requestId, forwardSupervisor) => {
    const url = `/users/${userId}/requests/${requestId}`;
    
    return api.put(url, { 
        forward_to_supervisor: forwardSupervisor
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

export const createDeposit = async(userId, value, depositDate, company) => {
    const url = `/users/${userId}/${company}/deposit`;
    
    return api.post(url, { 
        value,
        depositDate
    })
}
