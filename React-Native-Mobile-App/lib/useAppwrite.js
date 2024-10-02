import { useEffect, useState } from "react";
import { Alert } from "react-native";


const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();

      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message)
    } finally {
      setIsLoading(false);
    }

  }

  // async func cannot be called directly, so first define async func inside and then call it
  useEffect(() => {
    fetchData();
  }, []); // dependency list is empty -> meaning only fetching at the start

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
}

export default useAppwrite;