import axios from "axios";

class WebService
{
   getAPICall(url)
   {
       var obj = axios.get(url);
       return obj;
   }
}
export default new WebService();