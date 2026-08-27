// API Calling fn? --> fetch
//API calling library --> axios
//installing axios command: npm i axios

/* fetch(.....),{
method
header
body
}*/

//api.post("/login",data)--- axioseasy in one line 


import axios from "axios";
const api=axios.create({
    headers:{"Content-Type":"application/json"},
    baseURL: import.meta.env.VITE_API_URL,
});
export default api;