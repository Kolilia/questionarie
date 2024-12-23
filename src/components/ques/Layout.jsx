import React, { useState } from "react";
import Button from "../../shared/ui/button/Button";
import { quesCollection } from "./../../shared/collections/quesCollection";
import GeneratingStep from "./GeneratingStep";
import { useUi } from "../../shared/services/useUi";

const Layout = () => {
  const stepCurrent = useUi((state) => state.step);
  const [showQues, setShowQues] = useState(false);

  if (showQues) {
    return (
      <div className="flex justify-center mx-auto max-w-[900px]">
        {quesCollection.map((step, key) => {
          return stepCurrent === key ? <GeneratingStep step={step} /> : null;
        })}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <Button
        variant="primary"
        onClick={() => {
          setShowQues(true);
        }}
      >
        <h1 className="text-lg text-white">Собрать себя по кусочкам </h1>
      </Button>
    </div>
  );
};

export default Layout;
