import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { CoinsDataType } from "../../../Pages/Homepage";
import {formatCurrency} from "../../../utils/NumberFormatter.js"
type CryptoCardProps={
  cardContent:CoinsDataType,
}
const CryptoCard: React.FC<CryptoCardProps> = ({ cardContent }) => {
 
  return (
    <div className="w-full flex flex-col gap-3 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-2 rounded-t-lg"
        src={cardContent?.image}
        alt={cardContent?.id}
        loading="lazy"
        height={100}
        width={100}
      />
      <div className="px-5 pb-5">
        <Link to={cardContent?.id}>
          <h5 className="text-2xl font-medium capitalize tracking-tight text-gray-900 dark:text-white">
            {cardContent?.id}
          </h5>
        </Link>
        <p className="text-3xl">{formatCurrency(cardContent?.current_price)}</p>
        <div className="flex items-center justify-between">
          
          <Link
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center capitalize dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            track price
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
