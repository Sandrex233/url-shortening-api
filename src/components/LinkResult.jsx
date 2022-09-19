import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLink(res.data.result.full_short_link)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData()
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [copied]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return (
        <div className='flex items-center justify-between py-2 px-6'>
            <p className='mr-4 border-black border py-2 px-4'>{shortenLink}</p>

            <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}
            >
                <button className='py-2 px-4 text-white bg-purple-700 border-none'>Copy</button>
            </CopyToClipboard>

        </div>
    )
}

export default LinkResult