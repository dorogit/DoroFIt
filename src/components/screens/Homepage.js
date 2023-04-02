import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import edamam from "../../api/edamam";
const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const onSearchSubmit = async (Term) => {
    try {
      const response = await edamam.get('',{
        params:{
          app_id:"d37abae3",
          app_key:"6763fad46caf9a55c376a61b081d682b",
          ingr:Term
        }
      })
      setResults([...new Set(response.data.hints.map(({food}) => ({label:food.label, image:food.image, nutrients:food.nutrients})))])
      console.log(results)
    } catch (err) {
      setError('something went wrong')
    }
  }
  return (
    <View style = {homeStyles.view}>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={(inputValue) => setSearchTerm(inputValue)}
        onSubmit={() => {onSearchSubmit(searchTerm)}}
      />
      <Text>{searchTerm}</Text>
      <Text>found results</Text>
      <Text>{error}</Text>
    </View>
  )
}

const homeStyles = StyleSheet.create({
  view: {

  }
})

export default Homepage;


