import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {



    const [shortenLink, setShortenLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (inputValue.length) {
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

    // Truncates a long link
    const truncStr = () => {
        const newStr = inputValue.slice(0, 60) + "..."
        // console.log(newStr)
        return newStr;
    }

    // console.log(truncStr(inputValue))

    return (
        <>
            {shortenLink && (
                <div className='flex items-center justify-between mx-auto py-2 pt-7 space-y-6 md:space-y-0 px-6 max-w-[350px] md:max-w-5xl flex-col md:flex-row'>
                    <div className=''>
                        <p className='max-w-[300px]  break-all md:break-normal  flex items justify-between'>{truncStr(inputValue)}</p>
                    </div>

                    <div className='flex items-start justify-center flex-col md:flex-row'>
                        <p className='mr-4 py-2 md:px-4 text-[#2ACFCF]'>{shortenLink}</p>
                        <CopyToClipboard
                            text={shortenLink}
                            onCopy={() => setCopied(true)}
                        >
                            {copied
                                ? <button className='text-white bg-[#252329] text-base rounded-md transition ease-in-out p-2 px-32 md:px-10  baseline hover:opacity-90'>Copied!</button>
                                : <button className='text-white bg-[#2ACFCF] rounded-md transition ease-in-out p-2 px-32 md:px-10  baseline hover:bg-[#85e6e6]'>Copy</button>
                            }

                        </CopyToClipboard>
                    </div>

                </div>
            )
            }
        </>

    )
}

export default LinkResult