import React from "react";
import { IMG_CDN_URL } from "../config/config";
import { nonVeg, vegSign } from "../config/config";
import { useDispatch } from "react-redux";
import { addtocart } from "../utilis/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Foodmenu = ({
  name,
  price,
  imageId,
  itemAttribute,
  defaultPrice,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    // <div className="items-start flex justify-between">
    //   <div>
    //     {imageId !== undefined ? (
    //       <img src={IMG_CDN_URL + imageId} width={"100px"} />
    //     ) : (
    //       <img
    //         src="https://c8.alamy.com/comp/2PGBJ8N/food-bowl-icon-outline-vector-meal-snack-kid-nutrition-2PGBJ8N.jpg"
    //         width={"100px"}
    //       />
    //     )}
    //   </div>
    //   <div className="w-[calc(100% - 144px )]">
    //     <li className="mt-2">
    //       {itemAttribute.vegClassifier === "VEG" ? (
    //         <img src={vegSign} width={"15px"} height={"15px"} />
    //       ) : (
    //         <img src={nonVeg} width={"15px"} height={"15px"} />
    //       )}
    //     </li>
    //     <li className="mt-2"> {name}</li>
    //     <li className="mt-2">
    //       {Math.round(price !== undefined ? price / 100 : defaultPrice / 100)}
    //       {"RS"}
    //     </li>
    //     <button
    //       className="p-2 bg-gray-400 m-2 text-[#fff] font-semibold rounded-md"
    //       onClick={() => {
    //         dispatch(
    //           addtocart({
    //             name,
    //             price,
    //             imageId,
    //             itemAttribute,
    //             defaultPrice,
    //             id,
    //             quantity: 1,
    //           })
    //         );
    //         toast(name + " Added 2 Cart 😍", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       }}
    //     >
    //       add2Cart
    //     </button>
    //   </div>
    //   <ToastContainer />
    // </div>
    <tbody>
      <tr className="border-b-[0.5px] border-[#d3d3d3]">
        <td className="w-[118px] h-[96px] p-[5px] [&>img]:rounded-[6px] ">
          {" "}
          {imageId !== undefined ? (
            <img src={IMG_CDN_URL + imageId} />
          ) : (
            <img src="https://c8.alamy.com/comp/2PGBJ8N/food-bowl-icon-outline-vector-meal-snack-kid-nutrition-2PGBJ8N.jpg" />
          )}
        </td>
        <td>
          {" "}
          {itemAttribute.vegClassifier === "VEG" ? (
            <img src={vegSign} width={"40px"} height={"40px"} />
          ) : (
            <img src={nonVeg} width={"35px"} height={"35px"} />
          )}
        </td>
        <td className="p-[10px] text-[1rem] font-[500] text-[#3e4152]">
          <p> {name}</p>
          <p className=" font-[400]">
            <span className="mx-1">{"\u20B9"}</span>
            {Math.round(price !== undefined ? price / 100 : defaultPrice / 100)}
          </p>
        </td>

        <td className="text-center">
          <button
            className="w-[96px] h-[36px] p-1 shadow-md m-2 text-[#60b246] font-semibold rounded-md border-[0.5px] border-[#60b246] hover:bg-[#60b246]  hover:text-[#fff] hover:font-semibold transition ease-in-out delay-100"
            onClick={() => {
              dispatch(
                addtocart({
                  name,
                  price,
                  imageId,
                  itemAttribute,
                  defaultPrice,
                  id,
                  quantity: 1,
                })
              );
              toast(name + " Added 2 Cart 😍", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            ADD
          </button>
        </td>
        <ToastContainer />
      </tr>
    </tbody>
  );
};

export default Foodmenu;
