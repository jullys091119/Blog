import { useNavigation } from "@react-navigation/native"

export function openDetails (id) {
   const navigation  = useNavigation();
   navigation.navigate("PostDetails")
}

