import axios from "axios";

export const fetchs = async () => {
    const res = await axios.get(
      "https://chit-chat.tech/api/v1/getAllOrganization"
    );
  
    return res.data;
  };

export const getOrganizationById = async (userId: any) => {
    const res = await axios.get(
      `https://chit-chat.tech/api/v1/getOrganizationById?UserId=${userId}`
    );
  
    return res.data;
  };
  
  export const getAiModelById = async (userId: any) => {
    const res = await axios.get(
      `https://chit-chat.tech/api/v1/getAiModelById?UserId=${userId}`
    );
  
    return res.data;
  };
export const fetchAi = async () => {
    const res = await axios.get(
      "https://chit-chat.tech/api/v1/getAllAiTrainedData"
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
  UserName: string,
  Password: string
}
export const Auth = async(User : user)=>{
  const data = await axios.post(
      "https://chit-chat.tech/register/login",
      User
    );
  
    return data;
}
type users = {
  UserName: string,
  UserEmail:string,
  Password: string
}
export const SignUp = async(User : users)=>{
  const data = await axios.post(
      "https://chit-chat.tech/register/signup",
      User
    );
  
    return data;
}

export const getOrgWithId = async()=>{
  const data = await axios.get("https://chit-chat.tech/api/v1/getOrganizationById",{
    withCredentials: true
  });
    return data;
}