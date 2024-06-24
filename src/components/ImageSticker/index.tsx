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
          if((translateY.value < 81 && translateY.value > -81) && (translateX.value < 316 && translateX.value > -316)){
            translateX.value += event.changeX;
            translateY.value += event.changeY;
          } else if((translateY.value >= 81 || translateY.value <= -81) && translateX.value < 316 && translateX.value > -316){
              translateX.value += event.changeX;
              if((event.changeY < 0 && translateY.value >= 81) || (event.changeY > 0 && translateY.value <= -81)){
                translateY.value += event.changeY;
              }
          } else if((translateX.value >= 316 || translateX.value <= -316) && translateY.value < 81 && translateY.value > -81){
              translateY.value += event.changeY;
              if((event.changeX < 0 && translateX.value >= 316) || (event.changeX > 0 && translateX.value <= -316)){
                translateX.value += event.changeX;
              }
          } else if((translateX.value >= 316 || translateX.value <= -316) && translateY.value > 81 || translateY.value < -81){
              if((event.changeY < 0 && translateY.value >= 81) || (event.changeY > 0 && translateY.value <= -81)){
                translateY.value += event.changeY;
              }
              if((event.changeX < 0 && translateX.value >= 316) || (event.changeX > 0 && translateX.value <= -316)){
                translateX.value += event.changeX;
              }
          }
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
          position: "absolute",
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
  
