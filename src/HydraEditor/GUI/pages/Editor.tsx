// import React from 'react';
import { useEffect, useRef, useState } from "react";
import SplitPane from "react-split-pane";
import { Toolbar } from "../components/editor/Toolbar";

import { ResourceBrowser } from "../components/editor/ResourceBrowser";
import { SceneHierarchy } from "../components/editor/SceneHierarchy";
import { SceneRenderer } from "../components/editor/SceneRender";
import { InspectorPanel } from "../components/editor/InspectorPanel";
import { ConsolePanel } from "../components/editor/ConsolePanel";

const Editor = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col overflow-hidden bg-gray-900"
      role="application"
      aria-label="Hydra Editor"
    >
      <Toolbar />
      <div className="flex-1 overflow-hidden">
        <SplitPane split="horizontal" defaultSize="80%" minSize={100} {...{} as any}>
          <SplitPane split="vertical" defaultSize={250} minSize={150} {...{} as any}>
            <SplitPane split="horizontal" defaultSize="50%" minSize={100} {...{} as any}>
              <SceneHierarchy />
              <ResourceBrowser />
            </SplitPane>
            <SplitPane split="vertical" defaultSize="70%" minSize={200} {...{} as any}>
              <SceneRenderer />
              <InspectorPanel />
            </SplitPane>
          </SplitPane>
          <ConsolePanel />
        </SplitPane>
      </div>
      
    </div>
  );
};

export default Editor;
