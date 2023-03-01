import { useRouter } from 'next/navigation';
import React from 'react'

const logout = () => {
    const router = useRouter();

    if (localStorage.getItem("token")) {
        localStorage.removeItem("token")
        router.push('/login')
    } else {
        router.push('/login')
    }
    return <div> </div>
}

export default logout