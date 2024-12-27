import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit-regular':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'playfairDisplay-regular':require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'playfairDisplay-black':require('../assets/fonts/PlayfairDisplay-Black.ttf'),
    'playfairDisplay-bold':require('../assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
    'playfairDisplay-italic':require('../assets/fonts/PlayfairDisplay-Italic.ttf'),
  }) 

  return <Stack />;
}
