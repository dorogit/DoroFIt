import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image,Text } from "react-native";

const ResultsDetail = ({title,url, nutrients}) => {
  return (
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection:'row'
        }}
      >
        <Image
          style={{ width: 100, height: 100,alignSelf:"flex-start" }}
          resizeMode="contain"
          source={{
            uri:
              `${url}`
          }}
        />
        <View style = {{ alignItems:'center',justifyContent:'center' }}>
          <Text style = {{fontWeight:'bold'}}>Nutritional Value:</Text>
          <Text>
            Carbohydrates: {nutrients.CHOCGF ? nutrients.CHOCDF.toFixed(2) : null} {"\n"}
            Calories: {nutrients.ENERC_KCAL} {"\n"}
            Fat (g): {nutrients.FAT ? nutrients.FAT.toFixed(2) : null} {"\n"}
            Fiber (g): {nutrients.FIBTG ? nutrients.FIBTG.toFixed(2) : null} {"\n"}
            Protein (g): {nutrients.PROCNT ? nutrients.PROCNT.toFixed(2) : null}
          </Text>
        </View>
      </View>
    </Card>
  );
}

export default ResultsDetail;