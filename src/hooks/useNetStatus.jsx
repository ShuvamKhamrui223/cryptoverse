import { useState } from "react";
const getNetStatus = () => navigator.onLine;
const useNetStatus = () => {
  const [netStatus] = useState(getNetStatus);

  return netStatus;
};

export default useNetStatus;
