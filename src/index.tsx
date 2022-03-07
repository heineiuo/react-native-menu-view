import { ProcessedMenuAction } from "@react-native-menu/menu/lib/typescript/src/types";
import { MenuAction, MenuComponentProps } from "@react-native-menu/menu";
import React from "react";

import UIMenuView from "./UIMenuView";

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
  const processedActions = actions.map<ProcessedMenuAction>((action) =>
    processAction(action)
  );
  return <UIMenuView {...props} actions={processedActions} />;
};
