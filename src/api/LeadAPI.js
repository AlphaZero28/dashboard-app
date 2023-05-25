import axios from "axios";
import url from "./url";

class LeadAPI {
    constructor() {
        this.headers = {
            headers: {
                "Content-type": "application/json"
            }
        }
    }

    get_all_leads(onResponse, onError) {
        // console.log('getting leads')
        console.log('url', url)
        axios.get(url + 'lead-segment/', this.headers)
            .then(onResponse)
            .catch(onError)
    }

    update_lead_data(onResponse, onError, data) {
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
}

export { LeadAPI }