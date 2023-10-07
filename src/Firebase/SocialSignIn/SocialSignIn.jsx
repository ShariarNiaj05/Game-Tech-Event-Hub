import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    
    const handleSocialLogin = media => {
        media()
            .then(result => {
            toast.success('Signed In Successful')
            })
            .catch(error => {
            toast.error(error.message)
        })
    }
  return (
      <>
          <div className=" divider"> Continue With</div>
      <div className=" flex gap-3 justify-center items-center">
        <button onClick={()=>handleSocialLogin(googleSignIn)} className=" btn btn-outline font-bold">
          Google
        </button>
        <button className=" btn btn-outline font-bold">Github</button>
          </div>
          <Toaster></Toaster>
    </>
  );
};

export default SocialSignIn;
