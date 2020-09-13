import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import Home from './screens/Home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack'
import Navigator from './routes/drawer'


const customFont = () => Font.loadAsync({
  'syne-regular': require('./assets/fonts/Syne-Regular.ttf'),
  'syne-bold': require('./assets/fonts/Syne-Bold.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded)
    return (
      <Navigator />
    );
  else {
    return <AppLoading
      startAsync={customFont}
      onFinish={() => setFontLoaded(true)}
    />
  }
}
