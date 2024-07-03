import { useEffect, useState } from 'react';
import DataTable from './DataTable';

function IndexTable({indexName, searchInput, setSearchInput, setLoaderDisplay}) {
  console.log("IndexName: ", indexName);
  console.log("CompanyName: ", searchInput);

  const [indexData, setIndexData] = useState([]);
  useEffect(() => {
    const fetchIndexData = async () => {
      setLoaderDisplay({})
      const url = import.meta.env.VITE_API_BASEURL;
      console.log(`FULL URL - ${url}index/${indexName}`)
      try {
        const response = await fetch(`${url}index/${indexName}`);
        if (!response.ok) {
          setLoaderDisplay({
            display: 'none'
          })
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        // console.log("Data.Data:", data.data);
        setIndexData(data.data);
        setLoaderDisplay({
          display: 'none'
        })
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoaderDisplay({
          display: 'none'
        })
      }
    }
    fetchIndexData();
  }, [indexName])

  useEffect(() => {
    const fetchCompanyData = async () => {
      setLoaderDisplay({})
      const url = import.meta.env.VITE_API_BASEURL;
      console.log(`FULL URL - ${url}index/${indexName}/company/${searchInput}`)
      try {
        const response = await fetch(`${url}index/${indexName}/company/${searchInput}`);
        if (!response.ok) {
          setLoaderDisplay({
            display: 'none'
          })
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        // console.log("Data.Data:", data.data);
        setIndexData(data.data);
        setLoaderDisplay({
          display: 'none'
        })
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoaderDisplay({
          display: 'none'
        })
      }
    }
    fetchCompanyData();
    setSearchInput("");
  }, [searchInput])

  return (
    <div>
      <DataTable indexData={indexData} indexName={indexName} />
    </div>
  )
}

export default IndexTable
