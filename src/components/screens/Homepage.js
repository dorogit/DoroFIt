import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import useResults from "../../hooks/useResults";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, error] = useResults()

  return (
    <View style = {homeStyles.view}>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={(inputValue) => setSearchTerm(inputValue)}
        onSubmit={() => {searchApi(searchTerm)}}
      />
      <Text>found {results ? results.length : null} results</Text>
      <FlatList
        data={results}
        renderItem={({item}) => <Text>{item.label}</Text>}
        keyExtractor={(item) => item.id}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

const homeStyles = StyleSheet.create({
  view: {

  }
})

export default Homepage;


