import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type imageStickerProps = {
    id: number;
    imageSize: any;
    stickerSource: any;
}

export default function ImageSticker(props: imageStickerProps) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const scaleImage = useSharedValue(props.imageSize);

    const drag = Gesture.Pan()
        .onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
          width: withSpring(scaleImage.value),
          height: withSpring(scaleImage.value),
        };
      });
      

      const containerStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: translateX.value,
            },
            {
              translateY: translateY.value,
            },
          ],
        };
      }); 
  
    return (
      <GestureDetector gesture={drag}>
        <Animated.View style={[containerStyle]}>
            <Animated.Image
              source={props.stickerSource}
              resizeMode="contain"
              style={[imageStyle, { width: props.imageSize, height: props.imageSize }]}
            />
        </Animated.View>
      </GestureDetector>
    );
  } 
  
