import React from "react";

const basicIntroduction = () => {
  return (
    <div className="relative flex items-center justify-center rounded-md overflow-hidden h-fit mr-32">
      {/* 模糊背景层 */}
      <div className="absolute inset-0 bg-white bg-opacity-15 backdrop-filter backdrop-blur-md"></div>

      {/* 内容层 */}
      <div className="relative z-10 p-4 text-white">
        <h2 className="text-xl font-bold">Hi!</h2>
        <p>
          I’m Zoe, a master’s student at San Francisco State University,
          majoring in Data Science and Artificial Intelligence. I’m passionate
          about exploring the intersections between data, algorithms, and
          real-world applications. I have hands-on experience working with
          Python. For this personal website, I use Next.js with TypeScript and
          Tailwind CSS to create modern, responsive web applications. <br />
          <br />
          Currently, I’m seeking internship opportunities where I can apply my
          skills, grow professionally, and contribute to meaningful projects. I
          believe in lifelong learning, and I’m always open to challenges that
          push me to the next level. Let’s connect and collaborate!
        </p>
      </div>
    </div>
  );
};

export default basicIntroduction;
