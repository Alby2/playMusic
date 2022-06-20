import { StyleSheet,SafeAreaView } from 'react-native';
import AudioListContext from './context/AudioListContext';
import Home from './screens/Home';

const App = ()=> {

  
  return (
    <AudioListContext>
      <Home/>
      {/* <CustomSlider data={data} /> */}
    </AudioListContext>
  );
}


export default App;
