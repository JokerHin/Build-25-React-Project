import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import Accordian from "../Accordion";
import RandomColor from "../Random Color";
import TicTacToe from "../Tic-tact-toe";
import { FeatureFlagsContext } from "./context/index";

export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    //takes a feature flag key and returns whether the feature is enabled by checking enabledFlags
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
}
