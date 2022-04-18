import { useEffect, useState } from "react"

//creating package data custom hook
const usePackageData = () => {
    //storing the package data into state
    const [packages, setPackages] = useState([]);

    //fetching the package data from json file
    useEffect(() => {
        fetch('/packageData.json')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    return [packages];
}

export default usePackageData;