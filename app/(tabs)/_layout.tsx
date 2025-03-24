import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo, Feather, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
     screenOptions={{
  //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
  headerShown: false
     }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="home" size={24} color="black"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Symptoms Checker",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="codescan-checkmark" size={24} color={color} />
          ),
        }}
      />
         <Tabs.Screen
        name="appoint"
        options={{
          title: "Appointment",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={24} color={color} />
          ),
        }}
      />
         <Tabs.Screen
        name="tips"
        options={{
          title: "Tips",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tips-and-updates" size={24} color={color} />
          ),
        }}
      />
         <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
