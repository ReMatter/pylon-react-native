module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: "./android",
        packageImportPath:
          "import com.pylonchat.reactnative.RNPylonChatPackage;",
      },
    },
  },
};
