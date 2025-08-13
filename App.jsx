import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageFlipper from 'react-native-mobile-page-flipper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window")

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <PageFlipper
          type="image"
          data={[
            'https://plus.unsplash.com/premium_photo-1754478593455-b7b69728242a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
            'https://images.unsplash.com/photo-1754993577931-f752477094b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
            'https://images.unsplash.com/photo-1754764987594-2236e7736115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
          ]}
          pageSize={{
            height: height - 25,
            width: width - 10,
          }}
          portrait={true}
          renderPage={(data) => <Image source={{ uri: data.content }} style={{ height: '100%', width: '100%' }} />}
        />
      </GestureHandlerRootView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})