import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import CryptoCard from "./CryptoCard";

const List = ({ contentList = [] }) => {
  // if (contentList?.length === 0) {
  //   return (
  //     <>
  //       <p className="px-3 text-gray-300 first-letter:uppercase">
  //         no coin found
  //       </p>
  //     </>
  //   );
  // }

  return (
    <>
      <section className="w-full grid gap-4 content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {contentList?.map((singleCoin) => (
          <CryptoCard cardContent={singleCoin} />
        ))}
      </section>
    </>
  );
};
List.propTypes = {
  contentList: PropTypes.array.isRequired,
  listHeading: PropTypes.string,
  limit: PropTypes.number,
  detailsPageLink: PropTypes.string,
};
export default List;
