import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get(url);
                setData(res.data);
                setData1(res.data);
            } catch(err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
        //for live refresh or reFetch, put url here, but if i want on button click, only remove url
    }, [url]);

    const reFetch = async () => {
        setLoading(true);

        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch(error) {
            setError(error);
        }
        setLoading(false);
    };
    return {data1, data, loading, error, reFetch};
};

export default useFetch;