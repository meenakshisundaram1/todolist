import axios from "axios";

const Base_URL= 'http://localhost:3000/tododata';


  interface myformdata{
    title: string;
    desc: string;
  }

export const posttodo = async (data : myformdata) =>{
    try{
        const responce = await axios.post(Base_URL,data);
        
        console.log("the responce is ",responce);
        return responce.data;
    }
    catch(errors){
        console.log(errors);

    }
};
export const gettodo = async ()=>{
    try{
        const responce = await axios.get(Base_URL);
        console.log("the responce is ",responce);
        return responce.data;

    }
    catch(errors){
        console.log(errors );
    }
};