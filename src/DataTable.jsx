import React from 'react'

function DataTable({ indexData, indexName }) {
    let i = 0;
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Company Name</th>
                        <th scope="col" className="px-6 py-3">{indexName === "BSESensex" ? 'CMP' : 'LTP'}</th>
                        <th scope="col" className="px-6 py-3">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        indexData && indexData.map((item) => {
                            return (
                                <tr key={i} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                    <td className="px-6 py-4">{++i}</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.companyName}</th>
                                    <td className="px-6 py-4">{indexName === "BSESensex" ? item.CMP : item.LTP}</td>
                                    <td className="px-6 py-4">{item.marketCap}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
