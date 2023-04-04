import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image,Text } from "react-native";

const ResultsDetail = ({title,url}) => {
  return (
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
          source={{
            uri:
              `${url}`
          }}
        />
        <Text>{title}</Text>
      </View>
    </Card>
  );
}

export default ResultsDetail;