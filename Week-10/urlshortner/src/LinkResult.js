import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function LinkResult({ inputValue }) {
    const [shortLink, setShortLink] = useState('Hello World');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [urlList, setUrlList] = useState([]);

    useEffect(() => {

        if (inputValue.length) {
            setLoading(true);
            fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result.result.full_short_link);
                        setShortLink(result.result.full_short_link);

                        setUrlList([...urlList, shortLink]);
                        setLoading(false);
                    },

                    (error) => {
                        setLoading(false);
                        setError(error);
                    }
                )
        }
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    });

    console.log(shortLink);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (loading) {
        return <div>Loading...</div>;
    } else if (shortLink) {

        return (
            <div className='result'>
                <ul>
                    {urlList.map((el) => {
                        return (
                            <li>
                                <p>{shortLink}</p>

                                <CopyToClipboard
                                    text={shortLink}
                                    onCopy={() => setCopied(true)}
                                >
                                    <button className={copied ? "copied" : ""}>Copy to clipboard</button>
                                </CopyToClipboard>
                            </li>
                        );
                    })}
                </ul>



            </div>
        )
    }
}

export default LinkResult