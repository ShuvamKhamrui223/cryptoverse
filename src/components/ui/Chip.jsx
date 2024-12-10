import { memo } from "react";

const Chip = memo(({ tag }) => {
  return (
    <>
      <div className="bg-cyan-950">
        <p className="text-white p-2">{tag}</p>
      </div>
    </>
  );
}, []);

export default Chip;
