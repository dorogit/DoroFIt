import React, { useState } from "react";
import { FlatList, Text, View,ScrollView } from "react-native";
import SearchBar from "../SearchBar";
import useResults from "../../hooks/useResults";
import ResultsDetail from "../ResultsDetail";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, error] = useResults()

  return (
    <ScrollView>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={(inputValue) => setSearchTerm(inputValue)}
        onSubmit={() => {searchApi(searchTerm)}}
      />
      <Text>found {results ? results.length : null} results</Text>
      <FlatList
        showsVerticalScrollIndicator= {false}
        data={results}
        renderItem={({item}) => (
          <ResultsDetail title = {item.label} url = {item.image}></ResultsDetail>
        )}
        keyExtractor={(item) => item.id}
      />
      {error ? <Text>{error}</Text> : null}
    </ScrollView>
  )
}


export default Homepage;


