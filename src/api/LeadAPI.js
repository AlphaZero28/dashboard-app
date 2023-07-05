import axios from "axios";
import url from "./url";

console.log(url);

class LeadAPI {
    constructor() {
        this.headers = {
            headers: {
                "Content-type": "application/json"
            }
        }
    }

    login(onResponse, onError, password) {
        axios.post(url + 'login/', { password }, this.headers)
            .then(onResponse)
            .catch(onError)
    }

    get_all_leads(onResponse, onError) {
        // console.log('getting leads')
        console.log('url', url)
        axios.get(url + 'lead-segment/', this.headers)
            .then(onResponse)
            .catch(onError)
    }

    update_lead_data(onResponse, onError, data) {
        // console.log('first')
        axios.put(url + 'update-lead-data/', data, this.headers)
            .then(onResponse)
            .catch(onError)
    }

    new_lead(onResponse, onError, data) {
        console.log('new lead', data);
        axios.post(url + 'new-lead/', data, this.headers)
            .then(onResponse)
            .catch(onError)
    }

    delete_lead(onResponse, onError, id) {
        axios.delete(url + 'delete-lead/', { data: { id } }, this.headers)
            .then(onResponse)
            .catch(onError)
    }

    update_lead(onResponse, onError, data) {
        console.log('edited row', data);
        axios.post(url + 'update-lead/', data, this.headers)
            .then(onResponse)
            .catch(onError)
    }
}

export { LeadAPI }