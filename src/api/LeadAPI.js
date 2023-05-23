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
        axios.get(url + 'lead-segment/', this.headers)
            .then(onResponse)
            .catch(onError)
    }

    // update_produkt(onResponse, onError, data) {
    //     axios.put(url + 'update-produkt/', data, this.headers)
    //         .then(onResponse)
    //         .catch(onError)
    // }

    // update_status(onResponse, onError, data) {
    //     axios.put(url + 'update-status/', data, this.headers)
    //         .then(onResponse)
    //         .catch(onError)
    // }

    // update_score(onResponse, onError, data) {
    //     axios.put(url + 'update-score/', data, this.headers)
    //         .then(onResponse)
    //         .catch(onError)
    // }

    update_lead_data(onResponse, onError, data) {
        axios.put(url + 'update-lead-data/', data, this.headers)
            .then(onResponse)
            .catch(onError)
    }

    new_lead(onResponse, onError, data) {
        axios.post(url + 'new-lead/', data, this.headers)
            .then(onResponse)
            .catch(onError)
    }
}

export { LeadAPI }