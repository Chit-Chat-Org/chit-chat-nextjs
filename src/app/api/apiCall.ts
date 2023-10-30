import axios from "axios";

export const getOrganizationById = async () => {
  const res = await axios.get(
    `https://chit-chat.tech/api/v1/getOrganizationById`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const getAiModelById = async () => {
  const res = await axios.get(
    `https://chit-chat.tech/api/v1/getAiModelById`,
    {
      withCredentials: true
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
    "https://chit-chat.tech/api/v1/newOrganization",
    Organization
  );

  return data;
};
type user = {
  UserName: string;
  Password: string;
};
export const Auth = async (User: user) => {
  const data = await axios.post("https://chit-chat.tech/register/login", User, {
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
  const data = await axios.post("https://chit-chat.tech/register/signup", User,{
    withCredentials:true
  });

  return data;
};


