import React from "react";

const InfoBlock = () => {
  return (
    <>
      <div className="flex items-center flex-col px-[400px] mb-40">
        <h1 className="text-h1 mb-8">Выросли - не поняли...</h1>

        <div className="flex w-full justify-end">
          <span className="text-md">…кто мы? </span>
        </div>
      </div>

      <p className="text-center text-lg px-[600px]">
        Сменяющие друг друга поколения — уникальные мозаики. Ученые ставят
        четкие возрастные рамки, но в душе многие ощущают себя частью другого
        поколения. А ты задумывался о том, на кого больше похож?
      </p>

      <div className="h-20" />

      <h1 className="text-center text-h4 mb-40">
        Вспомни, каким был твой мир?
      </h1>
    </>
  );
};

export default InfoBlock;
