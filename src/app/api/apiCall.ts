import axios from "axios";
import { serverUrl } from "./serverUrl";


const url = serverUrl({Production : true})
export const getOrganizationById = async (UserId: string | null) => {
  const res = await axios.get(
    url + `/api/v1/getOrganizationById`,
    {
      params: { UserId: UserId }, // Sending UserId as a query parameter
    }
  );

  return res.data;
};

export const getAiModelById = async (UserId: string | null) => {
  const res = await axios.get(
    url + `/api/v1/getAiModelById`,
    {
      params: { UserId: UserId }, // Sending UserId as a query parameter
    }
  );

  return res.data;
};

type organization = {
  OrganizationName: string;
  OrganizationWebsite: string;
  organizationEmail: string;
  OrganizationPhone: string;
  isActive: boolean;
};

export const addOrganization = async (Organization: organization) => {
  const data = await axios.post(
    url + "/api/v1/newOrganization",
    Organization
  );

  return data;
};
type user = {
  UserName: string;
  Password: string;
};
export const Auth = async (User: user) => {
  const data = await axios.post(url + "/register/login", User, {
    withCredentials: true,
  });

  return data;
};
type users = {
  UserName: string;
  UserEmail: string;
  Password: string;
};
export const SignUp = async (User: users) => {
  const data = await axios.post(url + "/register/signup", User,{
    withCredentials:true
  });

  return data;
};


