import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const wd = Dimensions.get("screen").width;
const ht = Dimensions.get("screen").height;
function Practice() {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 100,
          borderWidth: 0,
          borderRadius: 50,
          alignSelf: "center",
          position: "absolute",
          top: up,
          left: left,
          right: right,
          bottom: down,
        }}
      ></View>
      <View style={{ marginTop: 550 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TouchableOpacity
              onPress={() => setUp(up - 10)}
              style={{
                backgroundColor: "purple",
                width: 90,
                height: 30,
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                }}
              >
                Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setLeft(left - 10)}
              style={{
                backgroundColor: "purple",
                width: 90,
                height: 30,
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                }}
              >
                Left
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TouchableOpacity
              onPress={() => setUp(up + 10)}
              style={{
                backgroundColor: "purple",
                width: 90,
                height: 30,
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                }}
              >
                Down
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setLeft(left + 10);
                console.log(left);
                console.log(up);
              }}
              // onPressIn={() => setInterval(() => setLeft(left - 10), 10)}
              // onPressOut={()=> clearInterval()}
              style={{
                backgroundColor: "purple",
                width: 90,
                height: 30,
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                }}
              >
                Right
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Practice;
