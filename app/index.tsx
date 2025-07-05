import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-bold text-center  text-blue-500 font-quickSand-bold">
        Welcome to fast food app!
      </Text>
    </View>
  );
}
