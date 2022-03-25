# React Native MenuView

A `<MenuView>` shim for react-native-web. 

If Platform.OS is not web, use native `@react-native-menu/menu` instead.


https://user-images.githubusercontent.com/3146159/157003929-06cde779-c890-4d2c-ad36-9f0fa98509ce.mov



## Usage

```tsx

import { MenuView } from 'react-native-menu-view'

```

All props are same with `@react-native-menu/menu`. 

## `image` prop

You can use @font-face to load an image font in css. Then you 
can use font ligatures as `image` prop's value

```css
@font-face {
  /* important, font-family name must be `React Native Menu` */
  font-family: 'React Native Menu';
  font-style: normal;
  font-weight: 400;
  /* This file can be any font */
  src: url(/static/fonts/MaterialIcons.woff2) format('woff2');
}
```

```tsx
  <MenuView actions={[{ image: 'plus' }]} />
```