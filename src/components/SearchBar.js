import { View,TextInput,StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({searchTerm, handleSearch, onSubmit}) => {

  return (
    <View style = {searchStyles.view}>
      <Feather style = {searchStyles.iconStyle} name="search"/>
      <TextInput 
        onChangeText={(e) => handleSearch(e)} 
        placeholder="Search" 
        style = {searchStyles.inputStyle} 
        value= {searchTerm}
        onSubmitEditing={() => onSubmit()}
      />
    </View>
  )
}

const searchStyles = StyleSheet.create({
  view: {
    height:50,
    backgroundColor:'#cccccc',
    marginHorizontal:20,
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
  } ,
  inputStyle: {
    flex:1,
  },
  iconStyle: {
    alignSelf:'center',
    fontSize:32,
    marginHorizontal:15
  }
})

export default SearchBar;