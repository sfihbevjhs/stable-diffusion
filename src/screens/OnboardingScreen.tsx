import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign In
    console.log('Google Sign In pressed');
  };

  const handleAppleSignIn = () => {
    // TODO: Implement Apple Sign In
    console.log('Apple Sign In pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        }}
        style={styles.backgroundImage}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>heal your skin</Text>
                <Text style={styles.mainText}>with skin bliss</Text>
              </View>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={handleGoogleSignIn}
                  activeOpacity={0.8}>
                  <Icon name="g-translate" size={24} color="#FFFFFF" style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>continue with google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={handleAppleSignIn}
                  activeOpacity={0.8}>
                  <Icon name="phone-iphone" size={24} color="#FFFFFF" style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>continue with apple</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingBottom: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: height * 0.3,
  },
  mainText: {
    fontSize: 42,
    fontWeight: '300',
    color: '#FFFFFF',
    lineHeight: 50,
    fontFamily: 'System',
    letterSpacing: -0.5,
  },
  buttonContainer: {
    gap: 16,
  },
  authButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});

export default OnboardingScreen;