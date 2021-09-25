import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import * as Animatable from "react-native-animatable";

let { width, height } = Dimensions.get("window");

console.log(width, height);
let b: number[] = [];

for (var c = 0; c < 9; c++) {
  b.push(c);
}

let z: number[] = [2, 1, 0];

let rotateSt = (z0: number) => {
  return {
    0: {
      transform: [
        { translateX: z0 * 25 },
        { translateY: z0 * 25 },
        { rotateX: "0deg" },
        { rotateY: "0deg" },
        { rotateZ: "0rad" }
      ]
    },
    0.5: {
      transform: [
        { translateX: z0 * 25 },
        { translateY: z0 * 25 },
        { rotateX: "0deg" },
        { rotateY: "0deg" },
        { rotateZ: "3.14rad" }
      ]
    },
    1: {
      transform: [
        { translateX: z0 * 25 },
        { translateY: z0 * 25 },
        { rotateX: "0deg" },
        { rotateY: "0deg" },
        { rotateZ: "6.28rad" }
      ]
    }
  };
};

// let boxAnime = {
//   0: {
//     opacity: 0.8,

//   },
//   0.5: {
//     opacity: 1,

//   },
//   1: {
//     opacity: 0.8,

//   }
// };

let AppStyle = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    transform: [{ rotate: "45deg" }]
  },
  plate: {
    width: 150,
    height: 150,
    position: "absolute",
    flexWrap: "wrap"
  },
  boxes: {
    width: 40,
    height: 40,
    // backgroundColor: "blue",
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: "50%",
    margin: 5
  },
  screenProp: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center"
  }
});

let App: React.FC = () => (
  <View style={AppStyle.screenProp}>
    <View style={AppStyle.container}>
      {z.map((z0, ind0) => (
        <Animatable.View
          animation={rotateSt(z0)}
          style={[AppStyle.plate]}
          key={ind0}
          duration={10000}
          iterationCount="infinite"
          easing="linear"
        >
          {b.map((b0, ind1) => (
            <Animatable.Image
              style={[AppStyle.boxes]}
              // animation={boxAnime}
              // iterationCount="infinite"
              // duration={5000}
              source={{
                uri:
                  "https://is4-ssl.mzstatic.com/image/thumb/Purple/v4/c7/16/7d/c7167deb-aaa1-e627-1ae6-96db195e3c3a/source/256x256bb.png"
              }}
            />
          ))}
        </Animatable.View>
      ))}
    </View>
  </View>
);

export default App;
