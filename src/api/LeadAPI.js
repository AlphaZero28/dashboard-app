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
}

export { LeadAPI }