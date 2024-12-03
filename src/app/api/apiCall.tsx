import axios from "axios";
import { serverUrl } from "./serverUrl";


const url = serverUrl({Production : true})
export const getOrganizationById = async (UserId: string | null|undefined) => {
  const res = await axios.get(
    url + `/api/v1/newOrganization`,
    {
      params: { UserId: UserId },
    }
  );

  return res.data;
};

export type IaddAIModel= {
  organization:{
      userId:string;
  organizationName: string;},
  url:string;
  embeddingModel:string
}

export const addAIModel= async(AIModel:IaddAIModel)=>{

  const res = await axios.post(url + `/api/v1/addAiTrainingModel`,AIModel);
  return res.data;
}

export const fileUpload = async(formData:FormData)=>{
  const res = await axios.post(url + `/api/v1/upload`, formData);
  return res;
}

export const fileUploadUrl = async(resource_url:string)=>{
  const res = await axios.post(url + `/api/v1/upload/url`, {resource_url});
  return res;
}

export const getAiModelById = async (UserId: string | undefined|null) => {
  const res = await axios.get(
    url + `/api/v1/addAiTrainingModel`,
    {
      params: { UserId: UserId }
    }
  );

  return res.data;
};

export const getAiModelByKey = async (originalAPIKey: string | undefined|null) => {
  const res = await axios.get(
    url + `/api/v1/addAiTrainingModel/key`,
    {
      params: { originalAPIKey: originalAPIKey }
    }
  );

  return res.data;
};

export type organization = {
  userId:string | undefined;
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
  ExternalId:string| undefined;
};
export const Auth = async (User: user) => {
  const data = await axios.post(url + "/signin", User);

  return data;
};
type users = {
  ExternalId:string | null | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  fullname: string | null | undefined;
};
export const SignUp = async (User: users) => {
  const data = await axios.post(url + "/signup", User);

  return data;
};

