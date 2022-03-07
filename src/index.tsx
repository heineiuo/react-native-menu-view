import { ProcessedMenuAction } from "@react-native-menu/menu/lib/typescript/src/types";
import {
  MenuView as NativeMenuVuew,
  MenuAction,
  MenuComponentProps,
} from "@react-native-menu/menu";
import React, { createElement } from "react";

import UIMenuView from "./UIMenuView";
import { Platform } from "react-native";

function processAction(action: MenuAction): ProcessedMenuAction {
  return {
    ...action,
    subactions: action.subactions?.map((subAction) => processAction(subAction)),
  } as ProcessedMenuAction;
}

export const MenuView: React.FC<MenuComponentProps> = ({
  actions,
  ...props
}) => {
  if (Platform.OS !== "web") {
    return createElement(NativeMenuVuew, { actions, ...props });
  }
  const processedActions = actions.map<ProcessedMenuAction>((action) =>
    processAction(action)
  );
  return <UIMenuView {...props} actions={processedActions} />;
};
