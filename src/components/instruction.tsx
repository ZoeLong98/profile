import React from "react";
export const instruction = () => {
  return (
    <div className="relative flex items-center justify-center rounded-md overflow-hidden h-fit">
      {/* 模糊背景层 */}
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md"></div>

      {/* 内容层 */}
      <div className="relative z-10 p-4 text-white">
        <h2 className="text-2xl font-bold">Hi!</h2>
        <p></p>
      </div>
    </div>
  );
};

export default instruction;
