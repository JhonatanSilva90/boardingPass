import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles";
import { Flight } from "../../components/flight";
import { Info } from "../../components/info";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";
export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("../../assets/cover.png")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Faltam 15 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="Marabá" value="MAB" time="02:40" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={28} color={colors.black} />
              <Text style={styles.hours}>2h 35m</Text>
            </View>
            <Flight label="Belo Horizonte" value="CFN" time="05:15" />
          </View>
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Maria Larah</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="17/10/2024" />
              <Info label="Embarque" value="02:00" />
            </View>
          </View>
        </View>
        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray="5,5"
            />
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="4088" />
              <Info label="Assento" value="18F" />
            </View>
            <View style={styles.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="2" />
            </View>
          </View>
          <QRCode value="bordingCode" size={130} />
        </View>
      </View>
    </View>
  );
}
