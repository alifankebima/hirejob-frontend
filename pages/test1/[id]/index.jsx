import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import TestComponent from '../../../components/TestComponent';

const test1 = () => {
    const router = useRouter();
    const [worker, setWorker] = useState({});

    useEffect(() => {
        // if (router.isReady) {
        //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker`)
        //         .then((res) => {
        //             setWorker(res.data.data[0]);
        //             console.log(res.data.data);
        //         })
        //         .catch(error => console.log(error))
        // }
    }, [router.isReady])


    return (
        <>
            <div>halaman test1 id query</div>
            <div>id query : {router.query.id}</div>
            <div>data query : <TestComponent data={worker.name}/></div>
        </>
    )
}

export default test1