import { useEffect, useState } from "react"

//creating review data custom hook
const useReviewData = () => {
    //storing the review data into state
    const [reviews, setReviews] = useState([]);

    //fetching the review data from json file
    useEffect(() => {
        fetch('/reviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews];
}

export default useReviewData;