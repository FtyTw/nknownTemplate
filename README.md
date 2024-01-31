
# "Nknown" React-native based template WIP

## The app skeleton that contains basic  RN application structure:
- Redux structure (Redux toolkit)
- Basic UI components
- Linter predefined rules
- Modules short import
- Global styles
- HTTP requests handling with axios

## Miscellaneous
All of the changes relevant for *Android* or *iOS* must be provided with scripts contained in *scripts* folder

Android signing also handled by script with using *android_keys.json* file that must be placed to project's root with next structure (if you're expecting to use *react-native-maps* package your api key must be placed there as well):
```
{
  "MYAPP_UPLOAD_STORE_FILE":"nknown.keystore",
  "MYAPP_UPLOAD_KEY_ALIAS":"nknown",
  "MYAPP_UPLOAD_STORE_PASSWORD":"nknownpass",
  "MYAPP_UPLOAD_KEY_PASSWORD":"nknownpass",
  "GOOGLE_MAP_API_KEY": "YOUR_OWN_KEY"
}
```

## Upcoming:
- Navigation support of @react-navigation | wix/react-native-navigation
- Firebase | OneSignal automatic setup

