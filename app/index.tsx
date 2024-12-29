import { View } from "react-native";
import React, { useEffect, useState } from "react";
import GetStarted from "../components/GetStarted";
import { auth } from "../config/FirebaseConfig";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const user = auth.currentUser;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for the app to mount before performing navigation
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && user) {
      router.replace("/mytrip"); // Navigate after the layout has mounted
    }
  }, [isMounted, user]);

  // Show nothing until the layout is ready
  if (!isMounted) return null;

  return <View>{!user && <GetStarted />}</View>;
}
