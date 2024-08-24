import { useEffect } from "react";

const AddShow = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.topcreativeformat.com/6f257b46bf5627156750307c9d72227d/invoke.js';
        
        const atOptions = {
          key: '6f257b46bf5627156750307c9d72227d',
          format: 'iframe',
          height: 50,
          width: 320,
          params: {}
        };
    
        script.onload = () => {
          window.atOptions = atOptions;
        };
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
        <div className="md:h-20 h-14 md:w-[400px] w-60 my-5 mx-auto">
            
        </div>
    );
};

export default AddShow;