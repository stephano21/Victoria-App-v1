import { View, StyleSheet, Animated, Easing, ActivityIndicator } from 'react-native';

const Loader = () => {
  const rotation = new Animated.Value(0);

  // Configuración de la animación
  Animated.loop(
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
        <Animated.View style={[styles.circle, { transform: [{ rotate: rotateInterpolation }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderTopColor: "transparent",
  },
});

export default Loader;
