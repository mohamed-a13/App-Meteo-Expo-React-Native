import { Animated, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

const Animation = ({ children, delay }) => {
  const Width = Dimensions.get("window").width;

  const [anime, setAnime] = useState(new Animated.ValueXY({ x: Width, y: 0 }));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.spring(anime, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View style={{ transform: anime.getTranslateTransform() }}>
      {children}
    </Animated.View>
  );
};

export default Animation;
