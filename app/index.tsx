import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const handleGoogleSignIn = () => {
    console.log('Google Sign In pressed');
    // TODO: Implement Google Sign In
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign In pressed');
    // TODO: Implement Apple Sign In
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#D4A574', '#C49968', '#B8945C', '#A8845A']}
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Overlay for better text contrast */}
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)']}
          style={styles.overlayGradient}
        />
        
        {/* Content Container */}
        <View style={styles.contentContainer}>
          
          {/* Title Text */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>heal your skin</Text>
            <Text style={styles.titleText}>with skin bliss</Text>
          </View>

          {/* Auth Buttons Container */}
          <View style={styles.authContainer}>
            
            {/* Google Sign In Button */}
            <TouchableOpacity 
              style={styles.authButton}
              onPress={handleGoogleSignIn}
              activeOpacity={0.8}
            >
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Ionicons name="logo-google" size={20} color="#ffffff" />
                </View>
                <Text style={styles.buttonText}>continue with google</Text>
              </View>
            </TouchableOpacity>

            {/* Apple Sign In Button */}
            <TouchableOpacity 
              style={styles.authButton}
              onPress={handleAppleSignIn}
              activeOpacity={0.8}
            >
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Ionicons name="logo-apple" size={20} color="#ffffff" />
                </View>
                <Text style={styles.buttonText}>continue with apple</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: height * 0.15,
    paddingBottom: 60,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: height * 0.25,
  },
  titleText: {
    fontSize: 42,
    fontWeight: '300',
    color: '#ffffff',
    lineHeight: 48,
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  authContainer: {
    gap: 16,
    marginBottom: 20,
  },
  authButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backdropFilter: 'blur(10px)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});