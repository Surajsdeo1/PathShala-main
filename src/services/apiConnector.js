// //apiconnector file
import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector =(method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
  
};

// import axios from "axios";

// // Create an Axios instance
// export const axiosInstance = axios.create();

// // Function to make API requests
// export const apiConnector = async (method, url, bodyData = null, headers = null, params = null) => {
//   try {
//     // Make the request using Axios
//     const response = await axiosInstance({
//       method: method,
//       url: url,
//       data: bodyData,
//       headers: headers,
//       params: params,
//     });

//     // Return the response
//     return response;
//   } catch (error) {
//     // Handle any errors
//     console.error("Error making API request:", error);
//     throw error; // Re-throw the error to be handled by the caller
//   }
// };
