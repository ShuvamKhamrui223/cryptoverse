import { useOutletContext } from "react-router-dom";

const Ingridients = () => {
  const singleRecipe = useOutletContext();
  return (
    <>
      <div className="p-4 bg-gray-200 dark:bg-gray-800 my-4 ">
        <strong className="capitalize my-3">ingridients</strong>
        <ul className="">
          {singleRecipe?.ingredients &&
            singleRecipe?.ingredients?.map((ingridient) => (
              <li className="text-sm mt-2">{ingridient}test</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Ingridients;
