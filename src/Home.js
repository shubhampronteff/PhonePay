import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;
const ft = Dimensions.get("window").fontScale;

function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5C249A" />
      {/* Header Starts */}
      <View style={styles.header}>
        <View>
          <Image style={styles.img} source={require("../assets/pic.jpeg")} />
        </View>
        <View style={{ justifyContent: "center", marginLeft: wd * 0.03 }}>
          <Text
            style={{ color: "white", opacity: 0.85, fontSize: ht * 0.0145 }}
          >
            Your location
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ color: "white" }}>Hyderabad</Text>
            </View>
            <View style={{ marginLeft: wd * 0.015 }}>
              <Ionicons name="md-arrow-dropdown" size={24} color="white" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            right: -wd * 0.24,
            top: ht * 0.017,
          }}
        >
          <View style={{ marginRight: wd * 0.04 }}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={27}
              color="white"
            />
          </View>

          <View style={{ marginRight: wd * 0.04 }}>
            <FontAwesome name="bell" size={27} color="white" />
          </View>
          <View style={{ marginRight: wd * 0.04 }}>
            <FontAwesome5 name="question-circle" size={27} color="white" />
          </View>
        </View>
      </View>
      {/* Header Ends */}
      <ScrollView>
        {/* Transfer Money Starts */}
        <View style={styles.block}>
          <View
            style={{
              marginLeft: wd * 0.04,
              marginTop: ht * 0.01,
              marginBottom: ht * 0.02,
            }}
          >
            <Text>Transfer Money</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: wd * 0.05 }}>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <Feather name="arrow-up-right" size={40} color="white" />
                </View>
                <View style={styles.dot}></View>
                <View style={{ postion: "relative", bottom: ht * 0.02 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>To Contact</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: wd * 0.09 }}>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.025,
                      top: ht * 0.01,
                    }}
                  >
                    <Octicons name="arrow-small-up" size={24} color="white" />
                  </View>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.05,
                      bottom: ht * 0.02,
                    }}
                  >
                    <MaterialIcons
                      name="account-balance"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    postion: "relative",
                    top: ht * 0.006,
                    right: wd * 0.01,
                  }}
                >
                  <Text style={{ fontSize: ht * 0.016 }}>To Account</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: wd * 0.08 }}>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.025,
                      top: ht * 0.018,
                    }}
                  >
                    <Octicons name="arrow-small-down" size={24} color="white" />
                  </View>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.025,
                      bottom: ht * 0.02,
                    }}
                  >
                    <MaterialIcons
                      name="person-outline"
                      size={35}
                      color="white"
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    postion: "relative",
                    top: ht * 0.005,
                  }}
                >
                  <Text style={{ fontSize: ht * 0.016 }}>To Self</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: wd * 0.09 }}>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.035,
                      top: ht * 0.04,
                    }}
                  >
                    <FontAwesome name="rupee" size={16} color="white" />
                  </View>
                  <View
                    style={{
                      position: "relative",
                      left: wd * 0.015,
                      bottom: ht * 0.015,
                    }}
                  >
                    <AntDesign name="question" size={45} color="white" />
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    postion: "relative",
                    top: ht * 0.005,
                    right: wd * 0.032,
                  }}
                >
                  <Text style={{ fontSize: ht * 0.016 }}>Bank Balance</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Transfer Money Ends */}

        {/* Quick Links Starts */}
        <View style={styles.block}>
          <View
            style={{
              marginLeft: wd * 0.04,
              marginTop: ht * 0.01,
              marginBottom: ht * 0.02,
            }}
          >
            <Text>Quick Links</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: wd * 0.05, marginBottom: ht * 0.025 }}>
                <TouchableOpacity>
                  <View style={styles.icon}>
                    <View style={{ position: "relative", right: wd * 0.028 }}>
                      <MaterialCommunityIcons
                        name="wallet-outline"
                        size={29}
                        color="white"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      top: ht * 0.006,
                      right: wd * 0.01,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016 }}>Wallet</Text>
                    <Text style={{ fontSize: ht * 0.016 }}>Topup</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: wd * 0.12 }}>
                <TouchableOpacity>
                  <View
                    style={{
                      postion: "relative",
                      left: wd * 0.005,
                      marginBottom: ht * 0.002,
                    }}
                  >
                    <FontAwesome5
                      name="user-injured"
                      size={43}
                      color="#1FAF9E"
                    />
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      top: ht * 0.006,
                      right: wd * 0.01,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016, textAlign: "center" }}>
                      Accident
                    </Text>
                    <Text style={{ fontSize: ht * 0.016 }}>Insurance</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: wd * 0.1 }}>
                <TouchableOpacity>
                  <View style={styles.icon}>
                    <View style={{ position: "relative", left: wd * 0.03 }}>
                      <FontAwesome5 name="plus" size={29} color="white" />
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      top: ht * 0.005,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016, textAlign: "center" }}>
                      Play
                    </Text>
                    <Text style={{ fontSize: ht * 0.016 }}>Games</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ marginLeft: wd * 0.1 }}>
                <TouchableOpacity>
                  <View style={{ marginBottom: ht * 0.004 }}>
                    <Fontisto name="doctor" size={45} color="#1FAF9E" />
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      top: ht * 0.005,
                      right: wd * 0.032,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016 }}>Coronavirus</Text>
                    <Text style={{ fontSize: ht * 0.016, textAlign: "center" }}>
                      Insurance
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.01 }}>
              <View style={{ marginLeft: wd * 0.05 }}>
                <TouchableOpacity>
                  <View style={{ marginBottom: ht * 0.001 }}>
                    <MaterialCommunityIcons
                      name="gas-cylinder"
                      size={50}
                      color="#1FAF9E"
                    />
                  </View>

                  <View style={{ marginLeft: wd * 0.023 }}>
                    <Text style={{ fontSize: ht * 0.016 }}>Book a</Text>
                    <Text style={{ fontSize: ht * 0.016 }}>cylinder</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: wd * 0.12,
                  position: "relative",
                  top: ht * 0.006,
                }}
              >
                <TouchableOpacity>
                  <View style={{ position: "relative" }}>
                    <FontAwesome5 name="money-bill" size={32} color="#1FAF9E" />
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      bottom: ht * 0.06,
                      right: wd * 0.011,
                    }}
                  >
                    <FontAwesome5 name="money-bill" size={32} color="#1FAF9E" />
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      bottom: ht * 0.065,
                      left: wd * 0.034,
                    }}
                  >
                    <FontAwesome name="rupee" size={25} color="white" />
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      // top: ht * 0.006,
                      right: wd * 0.01,
                      marginTop: ht * 0.02,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016 }}>Liquid</Text>
                    <Text style={{ fontSize: ht * 0.016 }}>Funds</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: wd * 0.13 }}>
                <TouchableOpacity>
                  <View style={styles.icon}>
                    <View style={{ position: "relative", left: wd * 0.02 }}>
                      <MaterialIcons
                        name="shopping-basket"
                        size={34}
                        color="white"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: "center",
                      postion: "relative",
                      top: ht * 0.005,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016, textAlign: "center" }}>
                      Online
                    </Text>
                    <Text style={{ fontSize: ht * 0.016 }}>shopping</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ marginLeft: wd * 0.09 }}>
                <TouchableOpacity>
                  <View style={styles.coin}>
                    <View
                      style={{
                        postion: "relative",
                        top: ht * 0.0265,
                        left: wd * 0.01,
                      }}
                    >
                      <FontAwesome name="circle-thin" size={50} color="black" />
                    </View>
                    <View
                      style={{
                        postion: "absolute",
                        bottom: ht * 0.037,
                        left: wd * 0.026,
                        elevation: 10,
                      }}
                    >
                      <FontAwesome5
                        name="star-of-david"
                        size={35}
                        color="yellow"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: ht * 0.01,
                    }}
                  >
                    <Text style={{ fontSize: ht * 0.016 }}>Buy Gold</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* Quick Links Ends */}
        {/* View All Offers Starts */}
        <View style={styles.offersView}>
          <View
            style={{
              marginLeft: wd * 0.04,
              marginTop: ht * 0.02,
              marginBottom: ht * 0.02,
            }}
          >
            <TouchableOpacity>
              <View style={styles.round}>
                <View
                  style={{
                    position: "relative",
                    top: ht * 0.002,
                    left: wd * 0.039,
                  }}
                >
                  <FontAwesome5 name="percent" size={24} color="white" />
                </View>
              </View>
              <View>
                <Text>View All</Text>
                <Text style={{ textAlign: "center" }}>offers</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.line}></View>
          <View style={{ marginTop: ht * 0.02, marginBottom: ht * 0.02 }}>
            <TouchableOpacity>
              <View style={styles.round1}>
                <View
                  style={{
                    position: "relative",
                    top: ht * 0.001,
                    left: wd * 0.033,
                  }}
                >
                  <SimpleLineIcons
                    name="envelope-letter"
                    size={24}
                    color="white"
                  />
                </View>
              </View>
              <View>
                <Text>Refer & Earn</Text>
                <Text style={{ textAlign: "center" }}>$100</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* View All offers Endsz */}

        {/* Recharge & Pay Bills Starts */}
        <View style={styles.block}>
          <View
            style={{
              marginLeft: wd * 0.04,
              marginTop: ht * 0.01,
              marginBottom: ht * 0.02,
            }}
          >
            <Text>Recharge & Pay Bills</Text>
          </View>
          {/* First Row Starts */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: ht * 0.03,
            }}
          >
            {/* First Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <AntDesign name="mobile1" size={40} color="#673CB8" />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ textAlign: "center", fontSize: ht * 0.016 }}>
                    Mobile
                  </Text>
                  <Text style={{ fontSize: ht * 0.016 }}>Recharge</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Element Ends */}
            {/*Second Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome5
                    name="satellite-dish"
                    size={40}
                    color="#1FAF9E"
                  />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>DTH</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Second Element Ends */}
            {/*Third Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <MaterialCommunityIcons
                    name="lightbulb"
                    size={40}
                    color="#1FAF9E"
                  />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>Electricity</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Third Element Ends */}
            {/*Fourth Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome
                    // style={{ backgroundColor: "purple", width: 44 }}
                    name="credit-card-alt"
                    size={40}
                    color="#1FAF9E"
                  />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>Credit Card</Text>
                  <Text style={{ textAlign: "center", fontSize: ht * 0.016 }}>
                    Bill
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Fourth Element Ends */}
          </View>
          {/* First Row Ends */}
          {/* Second Row Starts */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: ht * 0.03,
            }}
          >
            {/* First Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <AntDesign name="mobile1" size={40} color="#673CB8" />
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    top: ht * 0.009,
                  }}
                >
                  <FontAwesome name="rupee" size={24} color="#1FAF9E" />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>PostPaid</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Element Ends */}
            {/*Second Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <MaterialCommunityIcons
                    name="shield"
                    size={40}
                    color="#1FAF9E"
                  />
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    top: ht * 0.009,
                  }}
                >
                  <Entypo name="plus" size={24} color="white" />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>LIC/Insurance</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Second Element Ends */}
            {/*Third Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome5
                    name="money-bill-alt"
                    size={40}
                    color="#1FAF9E"
                  />
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016, textAlign: "center" }}>
                    Loan
                  </Text>
                  <Text style={{ fontSize: ht * 0.016 }}>Repayment</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Third Element Ends */}
            {/*Fourth Element Starts */}
            <View>
              <TouchableOpacity>
                <View style={{ alignSelf: "center" }}>
                  <Entypo name="circle" size={40} color="#673CB8" />
                  <View
                    style={{
                      position: "absolute",
                      top: ht * 0.006,
                      left: wd * 0.011,
                    }}
                  >
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={34}
                      color="#1FAF9E"
                    />
                  </View>
                </View>
                <View style={{ marginTop: ht * 0.007 }}>
                  <Text style={{ fontSize: ht * 0.016 }}>View More</Text>
                  <Text style={{ textAlign: "center", fontSize: ht * 0.016 }}>
                    Bill
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Fourth Element Ends */}
          </View>
          {/* Second Row Ends */}
        </View>
        {/* Recharge & Pay Bills Ends */}
        <View style={styles.slider}>
          <ScrollView horizontal>
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic1.png")}
            />
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic4.png")}
            />
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic5.png")}
            />
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic6.png")}
            />
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic7.jpg")}
            />
            <Image
              style={styles.sliderimg}
              source={require("../assets/spic8.png")}
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.tab}>
        <View styles={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: ht * 0.008 }}>
              <Entypo name="home" size={24} color="#673CB8" />
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.016 }}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View styles={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: ht * 0.008 }}>
              <Feather name="shopping-bag" size={24} color="grey" />
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.016 }}>Stores</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View styles={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: ht * 0.008 }}>
              <Entypo name="switch" size={24} color="grey" />
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.016 }}>Switch</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View styles={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: ht * 0.008 }}>
              <FontAwesome name="circle-thin" size={24} color="grey" />
              <View
                style={{
                  position: "absolute",
                  top: ht * 0.008,
                  left: wd * 0.02,
                }}
              >
                <FontAwesome name="rupee" size={14} color="grey" />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.016 }}>My Money</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View styles={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: ht * 0.008 }}>
              <AntDesign name="shrink" size={24} color="grey" />
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.016 }}>History</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2EDEC",
    height: ht * 1,
  },
  header: {
    backgroundColor: "#673CB8",
    height: ht * 0.08,
    flexDirection: "row",
    elevation: 10,
  },
  //   imgView: {},
  img: {
    width: wd * 0.12,
    height: ht * 0.06,
    borderRadius: ht * 0.06,
    borderColor: "white",
    borderWidth: wd * 0.004,
    marginLeft: wd * 0.035,
    marginTop: ht * 0.008,
  },
  icon: {
    backgroundColor: "#673CB8",
    width: wd * 0.14,
    height: ht * 0.0685,
    borderRadius: ht * 0.09,
    justifyContent: "center",
    alignContent: "center",
  },
  dot: {
    backgroundColor: "green",
    width: wd * 0.05,
    height: ht * 0.025,
    borderRadius: ht * 0.09,
    borderWidth: wd * 0.0048,
    borderColor: "white",
    position: "relative",
    bottom: ht * 0.068,
    left: wd * 0.078,
  },
  block: {
    backgroundColor: "white",
    borderRadius: ht * 0.01,
    width: wd * 0.96,
    marginTop: ht * 0.01,
    marginLeft: wd * 0.02,
  },
  coin: {
    backgroundColor: "gold",
    width: wd * 0.14,
    height: ht * 0.0685,
    borderRadius: ht * 0.09,
    justifyContent: "center",
    alignContent: "center",
  },
  offersView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: ht * 0.01,
    width: wd * 0.96,
    marginTop: ht * 0.01,
    marginLeft: wd * 0.02,
    justifyContent: "space-evenly",
  },
  round: {
    backgroundColor: "#C62B95",
    width: wd * 0.14,
    height: ht * 0.0685,
    borderRadius: ht * 0.09,
    justifyContent: "center",
    alignContent: "center",
  },
  round1: {
    backgroundColor: "#9D36AF",
    width: wd * 0.14,
    height: ht * 0.0685,
    borderRadius: ht * 0.09,
    justifyContent: "center",
    marginLeft: wd * 0.03,
  },
  line: {
    width: wd * 0.006,
    height: ht * 0.13,
    backgroundColor: "#F2EDEC",
    marginTop: ht * 0.02,
    marginBottom: ht * 0.02,
  },
  slider: {
    width: wd * 0.96,
    marginTop: ht * 0.01,
    marginBottom: ht * 0.01,
    marginLeft: wd * 0.02,
    marginRight: wd * 0.02,
  },
  sliderimg: {
    height: ht * 0.16,
    borderRadius: ht * 0.01,
    width: wd * 0.96,
    marginRight: wd * 0.02,
  },
  tab: {
    backgroundColor: "white",
    width: wd * 1,
    height: ht * 0.08,
    position: "relative",
    marginBottom: ht * 0.0375,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
