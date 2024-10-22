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

    const marginY = 71;
    const marginX = 306;

    const scaleImage = useSharedValue(props.imageSize);

    const drag = Gesture.Pan()
        .onChange((event) => {
          if((translateY.value < marginY && translateY.value > -marginY) && (translateX.value < marginX && translateX.value > -marginX)){
            translateX.value += event.changeX;
            translateY.value += event.changeY;
          } else if((translateY.value >= marginY || translateY.value <= -marginY) && translateX.value < marginX && translateX.value > -marginX){
              translateX.value += event.changeX;
              if((event.changeY < 0 && translateY.value >= marginY) || (event.changeY > 0 && translateY.value <= -marginY)){
                translateY.value += event.changeY;
              }
          } else if((translateX.value >= marginX || translateX.value <= -marginX) && translateY.value < marginY && translateY.value > -marginY){
              translateY.value += event.changeY;
              if((event.changeX < 0 && translateX.value >= marginX) || (event.changeX > 0 && translateX.value <= -marginX)){
                translateX.value += event.changeX;
              }
          } else if((translateX.value >= marginX || translateX.value <= -marginX) && translateY.value > marginY || translateY.value < -marginY){
              if((event.changeY < 0 && translateY.value >= marginY) || (event.changeY > 0 && translateY.value <= -marginY)){
                translateY.value += event.changeY;
              }
              if((event.changeX < 0 && translateX.value >= marginX) || (event.changeX > 0 && translateX.value <= -marginX)){
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
  
