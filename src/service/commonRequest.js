import axios from "axios";

// define a function to set a common api call using Axios

export const commonRequest = async (method, url, Body) => {

    // req configuration

    let reqConfig = {
        method,
        url,
        data: Body,
        Headers: {
            "content-type": "application/json"
        }
    }

    // API calling using axios library

    return await axios(reqConfig).then((response) => {
        return response
    })
        .catch((err) => {
            return err
        })
}
