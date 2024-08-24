import { useEffect } from "react";
import { loadAd } from "./ad";

const AddShow = () => {
    useEffect(() => {
        loadAd(); 

        return () => {
          const adDiv = document.getElementById('ad-container');
          if (adDiv && adDiv.firstChild) {
              adDiv.removeChild(adDiv.firstChild);
          }
        };
    }, []);

    return (
        <div className="md:h-20 h-14 md:w-[400px] w-60 my-5 mx-auto">
            
        </div>
    );
};

export default AddShow;