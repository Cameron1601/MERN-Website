import { toast } from "react-toastify";
import axios from "axios";


const Logout = ({ history }) => {
  
      axios
        .get("/api/logout")
        .then((result) => {
          toast.success("Log out successfully");
          localStorage.removeItem("token");
          history.push("/");
          window.location.reload()
        })
        .catch((error) => {
          console.log(error);
          this.state = {
            isLoggedIn: false
        }
        });
        return  (
          
            <div>
                <p>You're now Logged Out</p>
            </div>
        );
    };

    
    export default Logout;