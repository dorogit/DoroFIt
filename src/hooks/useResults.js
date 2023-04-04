import { useState,useEffect } from "react";
import edamam from "../api/edamam";

export default () => {
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)
  const searchApi = async (Term) => {
    try {
      const response = await edamam.get('',{
        params:{
          app_id:"d37abae3",
          app_key:"6763fad46caf9a55c376a61b081d682b",
          ingr:Term
        }
      })
      const initialResults = [...new Set(response.data.hints.map(({food}, index) => ({label:food.label, image:food.image, nutrients:food.nutrients, id:index})))]
      const filteredResults = initialResults.filter(result => result.image !== undefined);
      setResults(filteredResults)
    } catch (err) {
      setError('something went wrong')
    }
  }
  useEffect(() => {
    searchApi('pasta')
  }, [])
  return [searchApi, results, error]
}