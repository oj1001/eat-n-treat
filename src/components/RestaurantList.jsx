import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

export default function RestaurantList({ Restaurants }) {
  const [res, setRes] = useState([]);
  // const url = "/restaurant";

  // const [Restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   axios.get(url).then((restaurants) => {
  //     setRestaurants(restaurants.data);
  //     cbRestaurants(restaurants.data);
  //   });
  // }, [cbRestaurants]);
  console.log(Restaurants);

  const filterdata = Restaurants.filter((item) => {
    return res !== ""
      ? (item.restaurantName.toLowerCase().includes(res) ||
          item.rCity.toLowerCase().includes(res)) &&
          item.restaurantRegistrationStatus
      : item.restaurantRegistrationStatus;
  });

  return (
    <div
      className="container"
      style={{ marginTop: "30px", verticalAlign: "auto", padding: "10px" }}
    >
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Enter Restaurant Name or location"
            onChange={(event) => {
              setRes(event.target.value);
            }}
          />
          <div className="searchIcon">
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="row flex-row" style={{ marginTop: "5%" }}>
        {filterdata.map((restaurant) => {
          return (
            <div className="col-4 pt-4">
              <RestaurantCard restaurant={restaurant} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
