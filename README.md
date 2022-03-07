# React Native MenuView

A `<MenuView>` shim for react-native-web. 

If Platform.OS is not web, use native `@react-native-menu/menu` instead.

## Usage

```tsx

import { MenuView } from 'react-native-menu-view'

```

All props are same with `@react-native-menu/menu`. 

`image` prop has format with `${fontFamily}/${character}/${fontSize?}`. You can use @font-face to 
load an image font.