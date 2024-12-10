import { useOutletContext } from "react-router-dom";

const Instructions = () => {
  const singleRecipe = useOutletContext();
  return (
    <>
      <div className="p-4 bg-gray-200 dark:bg-gray-800 my-4 ">
        <strong className="capitalize my-3">instructions</strong>
        <ul className="">
          {singleRecipe?.instructions &&
            singleRecipe?.instructions?.map((instruction) => (
              <li className="text-sm mt-2">{instruction}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Instructions;
