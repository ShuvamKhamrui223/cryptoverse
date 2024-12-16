import { useState } from "react";
const getNetStatus = (): boolean => navigator.onLine;
const useNetStatus = () => {
  const [netStatus] = useState<boolean>(getNetStatus);

  return netStatus;
};

export default useNetStatus;
