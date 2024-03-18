import { main_api_url } from "../config/config";

export const api_restraunt_data = async () => {
  const apiData = await fetch(main_api_url);
  if (!apiData.ok) {
    throw new Error("Failed to fetch data from the server");
  }

  const apijsonData = await apiData.json();
  const apiRestraunt =
    apijsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return apiRestraunt;
};
export const filteredData = (apidata, searchvalue) => {
  let filteredData = apidata?.filter((ele) =>
    ele.info.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
  );
  return filteredData;
};

export const ratingStars = (props) => {
  return [...Array(5)].map((_, index) => (
    <svg
      key={index}
      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={index < props ? "#faca15" : "currentcolor"}
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ));
};
