import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import OnboardingScreen from './screens/OnboardingScreen';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <OnboardingScreen />
    </SafeAreaProvider>
  );
};

export default App;