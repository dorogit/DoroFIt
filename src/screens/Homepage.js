import React, { useState } from "react";
import { FlatList, Text, View,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsDetail from "../components/ResultsDetail";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, error] = useResults()

  return (
    <>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={(inputValue) => setSearchTerm(inputValue)}
        onSubmit={() => {searchApi(searchTerm)}}
      />
      {error ? <Text>{error}</Text> : null}
      <FlatList
        showsVerticalScrollIndicator= {false}
        data={results}
        renderItem={({item}) => (
          <ResultsDetail title = {item.label} url = {item.image} nutrients = {item.nutrients} ></ResultsDetail>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}


export default Homepage;


