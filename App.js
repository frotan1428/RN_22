import { Text, View, StyleSheet } from "react-native";
import Flex1 from "./components/01-flex/flex1";
import Flex2 from "./components/01-flex/flex2";
import Flex3 from "./components/01-flex/flex3";
import Flex4 from "./components/01-flex/flex4";
import Flex5 from "./components/01-flex/flex5";
import Flex6 from "./components/01-flex/flex6";
import Flex7 from "./components/01-flex/flex7";
import Flex8 from "./components/01-flex/flex8";
import External from "./components/02-style-types/external";
import Flex9 from "./components/02-style-types/flex9";
import Internal from "./components/02-style-types/internal";
import Mixed from "./components/02-style-types/mixed";
import Practise1 from "./components/03-practise-flexbox/practise1";
import Position from "./components/04-position/position";
import PractiseView from "./components/05-practise-view/practise-view";
import PractiseScrollView from "./components/06-practise-scrollview/practise-scrollview";
import PractiseFlatList from "./components/07-practise-flatlist/practise-flatlist";
import FlatListComp from "./components/08-practise-flatlist-component/flatlist-comp";
//import Practise1 from "./components/03-practise-flexbox/practise1";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/*       
<Flex1/>
<Flex2/>
<Flex3/>
<Flex4/>
<Flex5/>
<Flex6/>
<Flex7 />
<Flex8/>
<Internal/>
<External/>
<Mixed/>
<Flex9/>
<Practise1/>
<Position />
<PractiseView/>
<PractiseScrollView/>
<PractiseFlatList/>
 */}
      <FlatListComp/>
    </View>
  );
};

export default App;
