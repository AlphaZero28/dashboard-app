import { PRODUCTION } from "../config"

var url = ""
if (PRODUCTION) {
    url = "https://h3009473.stratoserver.net/api/"
}
else {
    url = "http://127.0.0.1:8000/api/"
}
url = "http://h3009473.stratoserver.net:8000/api/"
export var frontend_url = "http://localhost:3000/"
export default url