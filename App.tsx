import { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { MenuView } from "./src";

export default function App() {
  useEffect(() => {
    if (Platform.OS === "web") {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);
  return (
    <View style={styles.container}>
      <MenuView
        title="Menu Title"
        onPressAction={({ nativeEvent }) => {
          console.warn(JSON.stringify(nativeEvent));
        }}
        actions={[
          {
            id: "add",
            title: "Add to List",
            titleColor: "#2367A2",
            image: Platform.select({
              ios: "plus",
              android: "ic_menu_add",
              web: "face",
            }),
            imageColor: "#2367A2",
            subactions: [
              {
                id: "nested1",
                title: "Nested action",
                titleColor: "rgba(250,180,100,0.5)",
                subtitle: "State is mixed",
                image: Platform.select({
                  ios: "heart.fill",
                  android: "ic_menu_today",
                  web: "e88e",
                }),
                imageColor: "rgba(100,200,250,0.3)",
                state: "mixed",
              },
              {
                id: "nestedDestructive",
                title: "Destructive Action",
                attributes: {
                  destructive: true,
                },
                image: Platform.select({
                  ios: "trash",
                  android: "ic_menu_delete",
                  web: "delete",
                }),
              },
            ],
          },
          {
            id: "share",
            title: "Share Action",
            titleColor: "#46F289",
            subtitle: "Share action on SNS",
            image: Platform.select({
              ios: "square.and.arrow.up",
              android: "ic_menu_share",
              web: "share",
            }),
            imageColor: "#46F289",
            state: "on",
          },
          {
            id: "mixed",
            title: "Mixed State",
            titleColor: "rgba(100,200,250,0.3)",
            subtitle: "State is mixed",
            image: Platform.select({
              ios: "heart.fill",
              android: "ic_menu_today",
              web: "calendar_today",
            }),
            imageColor: "rgba(100,200,250,0.3)",
            state: "mixed",
            subactions: [
              {
                id: "nested2",
                title: "Nested action",
                titleColor: "rgba(250,180,100,0.5)",
                subtitle: "State is mixed",
                image: Platform.select({
                  ios: "tray",
                  android: "ic_menu_agenda",
                  web: "e88e",
                }),
                imageColor: "rgba(100,200,250,0.3)",
                state: "mixed",
              },
              {
                id: "nestedMixed",
                title: "Mixed State",
                subtitle: "State is mixed",
                image: Platform.select({
                  ios: "heart.fill",
                  android: "ic_menu_today",
                }),
                imageColor: "#46F289",
                subactions: [
                  {
                    id: "nestednesteddisabled",
                    title: "Disabled Action",
                    subtitle: "Action is disabled",
                    attributes: {
                      disabled: true,
                    },
                    image: Platform.select({
                      ios: "tray",
                      android: "ic_menu_agenda",
                      web: "e88e",
                    }),
                  },
                  {
                    id: "nestednestedhidden",
                    title: "Hidden Action",
                    subtitle: "Action is hidden",
                    attributes: {
                      hidden: true,
                    },
                  },
                  {
                    id: "nestednesteddestructive",
                    title: "Destructive Action",
                    attributes: {
                      destructive: true,
                    },
                    image: Platform.select({
                      ios: "trash",
                      android: "ic_menu_delete",
                      web: "face",
                    }),
                  },
                ],
              },
            ],
          },
          {
            id: "disabled",
            title: "Disabled Action",
            subtitle: "Action is disabled",
            attributes: {
              disabled: true,
            },
            image: Platform.select({
              ios: "tray",
              android: "ic_menu_agenda",
              web: "favorite",
            }),
          },
          {
            id: "hidden",
            title: "Hidden Action",
            subtitle: "Action is hidden",
            attributes: {
              hidden: true,
            },
          },
          {
            id: "destructive",
            title: "Destructive Action",
            attributes: {
              destructive: true,
            },
            image: Platform.select({
              ios: "trash",
              android: "ic_menu_delete",
              web: "delete",
            }),
          },
        ]}
        shouldOpenOnLongPress={true}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Test</Text>
        </View>
      </MenuView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "white" },
});
