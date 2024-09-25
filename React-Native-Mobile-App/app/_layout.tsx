import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { ThemeProvider } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: "index",

//   auth: { // <= important!
//     initialRouteName: "Login", // <= important!
//   },
// };

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>

    // <Stack>
    //   <Stack.Screen name='index' options={{ headerShown: false }} />
    // </Stack>

    // <ThemeProvider>
      // <SafeAreaView style={{ flex: 1, margin: 0, padding: 0 }}>
      //   <Stack screenOptions={{ headerShown: false }} >
      //     <Stack.Screen name="tabs" /> {/* <= important! */}
      //   </Stack>
      // </SafeAreaView>
    // </ThemeProvider>

  )
}

export default RootLayout

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })