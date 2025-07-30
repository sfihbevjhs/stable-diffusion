import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleGoogleSignIn = () => {
    console.log('Google Sign In pressed');
    // TODO: Implement Google Sign In authentication
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign In pressed');
    // TODO: Implement Apple Sign In authentication
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        {/* Background Image */}
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          {/* Gradient Overlay */}
          <LinearGradient
            colors={[
              'rgba(218, 165, 132, 0.4)',
              'rgba(139, 69, 19, 0.6)',
              'rgba(0, 0, 0, 0.8)'
            ]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.content}>
                {/* Main Text */}
                <Animated.View 
                  style={[
                    styles.textContainer,
                    {
                      opacity: fadeAnim,
                      transform: [{ translateY: slideAnim }],
                    }
                  ]}
                >
                  <Text style={styles.mainText}>heal your skin</Text>
                  <Text style={styles.subText}>with skin bliss</Text>
                  <View style={styles.underline} />
                </Animated.View>

                {/* Sign-in Buttons */}
                <Animated.View 
                  style={[
                    styles.buttonContainer,
                    {
                      opacity: fadeAnim,
                      transform: [{ translateY: slideAnim }],
                    }
                  ]}
                >
                  {/* Google Sign In Button */}
                  <TouchableOpacity
                    style={[styles.signInButton, styles.googleButton]}
                    onPress={handleGoogleSignIn}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.6)']}
                      style={styles.buttonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={styles.buttonContent}>
                        <Ionicons name="logo-google" size={24} color="#FFFFFF" />
                        <Text style={styles.buttonText}>continue with google</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>

                  {/* Apple Sign In Button */}
                  <TouchableOpacity
                    style={[styles.signInButton, styles.appleButton]}
                    onPress={handleAppleSignIn}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.6)']}
                      style={styles.buttonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={styles.buttonContent}>
                        <Ionicons name="logo-apple" size={24} color="#FFFFFF" />
                        <Text style={styles.buttonText}>continue with apple</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
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
    paddingBottom: Platform.OS === 'ios' ? 50 : 70,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: height * 0.25,
    paddingLeft: 8,
  },
  mainText: {
    fontSize: Math.min(width * 0.12, 52),
    fontWeight: '200',
    color: '#FFFFFF',
    lineHeight: Math.min(width * 0.14, 60),
    marginBottom: 4,
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subText: {
    fontSize: Math.min(width * 0.12, 52),
    fontWeight: '200',
    color: '#FFFFFF',
    lineHeight: Math.min(width * 0.14, 60),
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  underline: {
    width: 60,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 16,
    borderRadius: 1,
  },
  buttonContainer: {
    gap: 16,
    paddingHorizontal: 8,
  },
  signInButton: {
    borderRadius: 28,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  appleButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 28,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});

export default OnboardingScreen;