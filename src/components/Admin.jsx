import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Admin = () => {
  const isAuthenticated = useSelector((state) => state);
  console.log("admin=>", isAuthenticated);

<<<<<<< HEAD
  if (!isAuthenticated) return <Redirect to="/" />;
=======
    if(!isAuthenticated) return <Redirect to="/notFound404"/>
    
    return (
        <>
        {isAuthenticated ? <h2>true</h2> : <h2>false</h2>}
        </>
    )
}
>>>>>>> 5bb1831d313586ea5e3301a4613b0a9367007260

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://spreadsheets.google.com/feeds/cells/1lzHqm7_1FDtEQLvTOA8N98OMol001ZC1v4H6ec4QFBI/od6/public/basic?alt=json"
      );
      const data = await res.json();
      console.log(data);
    } catch {
      console.log("error");
    }
  };
  fetchData();

  return <>{isAuthenticated ? <h2>true</h2> : <h2>false</h2>}</>;
};

export default Admin;
