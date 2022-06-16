import axios from "axios";
import { SystemConstants } from "../common/texts";

const backendApi = axios.create({
    baseURL: SystemConstants.BACKEND.API,
})

export default backendApi;