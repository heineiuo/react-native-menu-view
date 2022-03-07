# React Native MenuView

A `<MenuView>` shim for react-native-web. 

If Platform.OS is not web, use native `@react-native-menu/menu` instead.


https://user-images.githubusercontent.com/3146159/157003929-06cde779-c890-4d2c-ad36-9f0fa98509ce.mov



## Usage

```tsx

import { MenuView } from 'react-native-menu-view'

```

All props are same with `@react-native-menu/menu`. 

`image` prop has format with `${fontFamily}/${ligatures}/${fontSize?}`. You can use @font-face to 
load an image font.