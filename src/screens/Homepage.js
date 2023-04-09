import React, { useState } from "react";
import { FlatList, Text, View,ScrollView, Button, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsDetail from "../components/ResultsDetail";

const Homepage = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, error] = useResults()
  console.log(props)
  return (
    <>
      <Button title="goof" onPress={() => props.navigation.navigate('My Workouts')}></Button>
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


