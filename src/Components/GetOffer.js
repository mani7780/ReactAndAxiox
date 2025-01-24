import React, { useState, useEffect } from "react";
import axios from "axios";
import offerMsg from "../offerMsg.json";

const GetOffer = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

//   https://jsonplaceholder.typicode.com/posts
  const apiOfferUrl = "https://jsonplaceholder.typicode.com/users";
//   const apiOfferUrl = "https://api-qat02.frontier.com/ecomm-resi-acquisition/v7/accountuuid/aeae8005-a5b2-1a55-a62d-0004ac1be08b/customerOffer";

/**
 * Input Key from Widget
 * 1. Bearer Token
 * 2. Api Key
 * 3. Account UUID
 * 4. Base URL(Domain)
 */
  const config = {
    headers: {
    //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    //   'apikey': 'OPlFN4hcJNUBTyLsL6GkZvtEWeKPKAaT',
    //   'requestingApplication': 'mobile',
      'Content-Type': 'application/json'
    }
  };

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(apiOfferUrl, config);
      // if (response && response.data && response.data.length > 0) {
      //   for (let i = 0; i < response.data.length; i++) {
      //     console.log('asdadasd111==>', response.data[i].name);
      //     console.log('asdadasd122==>', Object.keys(offerMsg.OfferList));
      //       if(response.data[i].name === Object.keys(offerMsg.OfferList)) {
      //         response.data[i].displayMsg = offerMsg.OfferList[response.data[i].name];
      //       }
      //   }
      // }
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <h2>Get Offers</h2>
      {data && data.length > 0 &&
      <ul>
        {data.map((post) => (
          <li key={post.id} id={post.id}>{post.name}</li> //post.title
        ))}
      </ul> }
      {data && data.length === 0 && 
        <div>No Offer Available</div>
      } */}
    </div>
  );
};

export default GetOffer;
