import { useState } from 'react'
import Navbar from './Navbar'
import IndexTable from './IndexTable';
import Loader from './Loader';

function App() {
    const [indexName, setIndexName] = useState("NSENifty");
    const [searchInput, setSearchInput] = useState("");
    const [loaderDisplay, setLoaderDisplay] = useState({
        display: 'none'
    });

    return (
        <>
            <Navbar setIndexName={setIndexName} setSearchInput={setSearchInput} />
            <main className='p-10'>
                <Loader loaderDisplay={loaderDisplay} />
                <IndexTable indexName={indexName} searchInput={searchInput} setSearchInput={setSearchInput} setLoaderDisplay={setLoaderDisplay} />
                <div className="relative h-32 w-auto ">
                    <div className="absolute inset-x-0 bottom-0 h-16 ">
                        <p className='text-center'>
                            Made with 💖 by <a className='underline' href='https://tejas-kr.github.io' target='_blank'>Tejas Kumar Jaiswal</a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
