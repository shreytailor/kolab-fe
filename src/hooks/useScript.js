import { useEffect } from 'react';

/**
 * This hook is used to load a JavaScript script into the page.
 * @param url the location of the script that you want to load.
 */
const useScript =  (url) => {
    useEffect(() =>  {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url])
}

export default useScript;