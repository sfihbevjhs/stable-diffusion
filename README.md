# Skincare Mobile App

A beautiful React Native mobile application for skincare with an elegant onboarding experience.

## Features

- Beautiful onboarding screen with authentication options
- Google Sign-In integration
- Apple Sign-In integration
- Modern UI design with gradient overlays
- Safe area handling for different device sizes

## Design

The onboarding screen features:
- High-quality beauty background image
- Elegant typography with "heal your skin with skin bliss" messaging
- Two authentication buttons with icons
- Dark semi-transparent buttons for better readability
- Gradient overlay for optimal text contrast

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- React Native development environment set up
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS, install CocoaPods dependencies:
```bash
cd ios && pod install
```

### Running the App

For Android:
```bash
npm run android
```

For iOS:
```bash
npm run ios
```

### Development

Start the Metro bundler:
```bash
npm start
```

## Project Structure

```
src/
  ├── App.tsx                 # Main app component
  ├── screens/
  │   └── OnboardingScreen.tsx # Onboarding screen implementation
  └── components/             # Reusable components (future)
```

## Authentication Setup

To enable authentication:

1. **Google Sign-In**: Configure your Google OAuth credentials in the Google Cloud Console
2. **Apple Sign-In**: Set up Apple Sign-In in your Apple Developer account

## Technologies Used

- React Native 0.72.6
- TypeScript
- React Native Vector Icons
- React Native Linear Gradient
- React Native Safe Area Context
- Google Sign-In SDK
- Apple Authentication SDK

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

