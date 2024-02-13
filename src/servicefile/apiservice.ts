import axios from "axios";
import { Base_URL } from "../Environmenet/env";





  interface myformdata{
    id:string;
    title: string;
    desc: string;
  }

export const posttodo = async (data : myformdata) =>{
    try{
        const responce = await axios.post(Base_URL,data);
        
        return responce.data;
    }
    catch(errors){
        console.error(errors);

    }
};
export const gettodo = async ()=>{
    try{
        const responce = await axios.get(Base_URL);
        return responce.data;

    }
    catch(errors){
        console.error(errors );
    }
};

export const gettodobyid = async (id : string) => {
    try{
        const responce = await axios.get(`${Base_URL}/${id}`);
        return responce.data;
    }
    catch(errors){
        console.error(errors );

    }
};
export const puttoddobyid = async (data: myformdata)=>{
    try{
        const responce = await axios.put(`${Base_URL}/${data.id}`,data);
        return responce.data;
    }
    catch(errors){
        console.error(errors );

    }
          
};
export const deletebyid= async (id : string)=>{
    try{
        const responce = await axios.delete(`${Base_URL}/${id}`);
        return {"Message" : "Deleted completed "};

    }
    catch(errors){
        console.error(errors );

    }

};