import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://give-ngrow-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          userLogOut()
            .then(() => {
              navigate("/SignIn");
            })
            .catch((err) => {
                if(process.env.NODE_ENV === 'development'){
                    console.log(err)
                }
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
