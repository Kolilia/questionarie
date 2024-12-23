import React, { useState } from "react";
import { useUi } from "../../shared/services/useUi";
import Radio from "../../shared/ui/radio/Radio";
import Button from "../../shared/ui/button/Button";

const titles = [
  "Выбери мультфильм",
  "Выбери двор, в котором играл",
  "Выбери ту самую еду",
  "Вспомни свой Новый год",
  "Выбери игру",
  "Выбери напиток",
  "Ощути школьный вайб",
  "Выбери ТВ-программу",
  "Выбери музыку",
  "Выбери игрушку",
];

const GeneratingStep = ({ step }) => {
  const currentStep = useUi((state) => state.step);
  const updateStep = useUi((state) => state.updateStep);
  const updatePicture = useUi((state) => state.updatePicture);
  const updateQuesRes = useUi((state) => state.updateQuesRes);
  const updateShowFinal = useUi((state) => state.updateShowFinal);

  const [currentPicture, setCurrentPicture] = useState();

  return (
    <div className="flex flex-col">
      <h1 className="text-md  text-center ">{titles[currentStep]}</h1>

      <div className="h-24" />

      <div className="flex">
        {step.map((infoStep) => {
          return (
            <div key={infoStep.imgUrl} className="mr-8">
              <Radio
                label={
                  <>
                    <img
                      src={infoStep.imgUrl}
                      alt=""
                      width={700}
                      height={700}
                    />
                  </>
                }
                checked={currentPicture === infoStep.imgUrl}
                onChange={() => {
                  setCurrentPicture(infoStep.imgUrl);
                }}
              />
            </div>
          );
        })}
      </div>

      {currentStep < 9 ? (
        <div className="flex justify-end mt-24">
          <Button variant="primary" disabled={!currentPicture}>
            <h1
              className="text-md text-white"
              onClick={() => {
                const findPict = step.find(
                  (item) => item.imgUrl === currentPicture
                );

                if (findPict) {
                  updateStep(currentStep + 1);
                  updatePicture(findPict.imgUrl);
                  updateQuesRes(findPict?.pokolenie);
                }
              }}
            >
              Дальше{" "}
            </h1>
          </Button>
        </div>
      ) : (
        <div className="flex justify-end mt-24">
          <Button
            variant="primary"
            onClick={() => {
              const findPict = step.find(
                (item) => item.imgUrl === currentPicture
              );

              if (findPict) {
                updateShowFinal(true);
                updatePicture(findPict.imgUrl);
                updateQuesRes(findPict?.pokolenie);
              }
            }}
          >
            <h1 className="text-md text-white">Закончить </h1>
          </Button>
        </div>
      )}
    </div>
  );
};

export default GeneratingStep;
