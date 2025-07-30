# Skin Bliss - Skincare Mobile App

A beautiful React Native mobile app for skincare enthusiasts, built with Expo.

## Features

- **Elegant Onboarding**: Beautiful welcome screen with social authentication options
- **Cross-Platform**: Works on both iOS and Android
- **Modern UI**: Clean, minimalist design focused on user experience
- **Social Authentication**: Support for Google and Apple sign-in

## Tech Stack

- **React Native** with Expo
- **Expo Router** for navigation
- **TypeScript** for type safety
- **Expo Linear Gradient** for beautiful gradients
- **Expo Vector Icons** for icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI: `npm install -g @expo/cli`
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Use the Expo Go app on your phone to scan the QR code, or press `i` for iOS simulator or `a` for Android emulator.

## Project Structure

```
skin-bliss-app/
├── app/                 # App screens (Expo Router)
│   ├── _layout.tsx     # Root layout
│   └── index.tsx       # Onboarding screen
├── assets/             # Static assets
│   └── fonts/          # Font files
├── package.json        # Dependencies
├── app.json           # Expo configuration
└── tsconfig.json      # TypeScript configuration
```

## Design Philosophy

The app focuses on creating a calming, luxurious experience that reflects the skincare industry's emphasis on self-care and wellness. The warm, skin-tone color palette and clean typography create an inviting atmosphere for users.

## Development

To add new screens:
1. Create a new file in the `app/` directory
2. Export a default React component
3. The file name becomes the route automatically with Expo Router

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

