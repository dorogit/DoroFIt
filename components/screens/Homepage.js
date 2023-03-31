import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const onSearchSubmit = () => {
    console.log('submitted')
  }
  return (
    <View style = {homeStyles.view}>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={(inputValue) => setSearchTerm(inputValue)}
        onSubmit={onSearchSubmit}
      />
      <Text>{searchTerm}</Text>
    </View>
  )
}

const homeStyles = StyleSheet.create({
  view: {

  }
})

export default Homepage;