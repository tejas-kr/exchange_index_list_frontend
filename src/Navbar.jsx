import React, { useEffect, useState } from 'react'

function Navbar({setIndexName, setSearchInput}) {

  const handleIndexNameChange = (event) => {
    setIndexName(event.target.value);
  };

  const handleCompanyNameSearch = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById("company_search_input").value
    console.log("event key:", event.key);
    if (inputValue !== "") {
      setSearchInput(inputValue);
    }
  };

  return (
      <header className="border-b bg-gray-50 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

          {/* <!-- Logo text or image --> */}
          <div className="flex items-center justify-between mb-4 md:mb-0">
              <h1 className="leading-none text-2xl text-grey-darkest">
                  <a className="no-underline font-serif text-grey-darkest hover:text-black" href="#">
                    Exchange Index List
                  </a>
              </h1>
          </div>
          {/* <!-- END Logo text or image --> */}

          {/* <!-- Search field --> */}
          <div className="mb-4 w-full md:mb-0 md:w-1/4">
            <form onSubmit={handleCompanyNameSearch}>
              <input id='company_search_input' className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search Company" type="text" />
            </form>
          </div>
          {/* <!-- END Search field --> */}


          <nav>
              <select onChange={handleIndexNameChange} name="index_name" id="index_name">
                  <option value="NSENifty">Nifty50</option>
                  <option value="BSESensex">Sensex</option>
              </select>
          </nav>

      </header>
  )
}

export default Navbar
