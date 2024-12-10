import { memo } from "react";
import { Form } from "react-router-dom";

const Searchbar = () => {
  return (
    <Form
      action="/search"
      className="w-full pt-6  flex items-center justify-center "
    >
      <input
        type="text"
        name="q"
        required
        inputMode="search"
        placeholder="Search a recipe"
        className="w-[80%] sm:w-[60%] bg-slate-800 outline-1 outline outline-gray-400 dark:outline-gray-600 focus:outline-gray-500 p-2 border-none rounded-l-md placeholder:font-thin"
      />
      <button className="px-4 p-2 bg-teal-600 rounded-r-md capitalize">
        search
      </button>
    </Form>
  );
};

export default memo(Searchbar);
