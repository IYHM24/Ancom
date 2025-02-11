import { axionsInstanceYoutube } from "../instance";

export const getContent = async (data) => {
    try {
        const response = await axionsInstanceYoutube.get("/search", {params: {...data} } )
        return response.data;
    } catch (error) {
      
    }
};

export const getStatics = async (data) => {
    try {
        const response = await axionsInstanceYoutube.get("/videos", {params: {...data} } )
        return response.data;
    } catch (error) {
      
    }
};
  