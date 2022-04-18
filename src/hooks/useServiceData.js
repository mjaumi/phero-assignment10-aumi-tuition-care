import { useEffect, useState } from "react"

const useServiceData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services];
}

export default useServiceData;