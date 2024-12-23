import React from "react";
import { useUi } from "../../shared/services/useUi";
import Button from "../../shared/ui/button/Button";

const Final = () => {
  const showFinal = useUi((state) => state.showFinal);
  const pictures = useUi((state) => state.pictures);
  const quesRes = useUi((state) => state.quesRes);
  const updateShowPokolenies = useUi((state) => state.updateShowPokolenies);

  if (showFinal) {
    return (
      <div className="flex flex-col items-center mx-auto max-w-[700px]">
        <h1 className="text-h3 text-center mb-20">Твой стартер-пак </h1>

        <div className="grid grid-cols-5 gap-4">
          {pictures.map((item) => {
            return (
              <img src={item} key={item} width={200} height={200} alt="" />
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              updateShowPokolenies(true);

              setTimeout(() => {
                const arrNumbers = Object.keys(quesRes).map(
                  (key) => quesRes[key]
                );
                const maxValue = Math.max(...arrNumbers);

                const key = Object.keys(quesRes).find(
                  (key) => quesRes[key] === maxValue
                );

                if (key === "alfa") {
                  const element = document.getElementById("alpha_block");

                  element.scrollIntoView({
                    alignToTop: true,
                    behavior: "smooth",
                  });
                } else if (key === "zumers") {
                  const element = document.getElementById("zumer_block");

                  element.scrollIntoView({
                    alignToTop: true,
                    behavior: "smooth",
                  });
                } else if (key === "bumer") {
                  const element = document.getElementById("bumer_block");

                  element.scrollIntoView({
                    alignToTop: true,
                    behavior: "smooth",
                  });
                } else if (key === "mil") {
                  const element = document.getElementById("mil_block");

                  element.scrollIntoView({
                    alignToTop: true,
                    behavior: "smooth",
                  });
                } else if (key === "xceri") {
                  const element = document.getElementById("xceri_block");

                  element.scrollIntoView({
                    alignToTop: true,
                    behavior: "smooth",
                  });
                }
              }, 200);
            }}
          >
            <h1 className="text-md ">И на кого же ты больше похож?</h1>
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Final;
