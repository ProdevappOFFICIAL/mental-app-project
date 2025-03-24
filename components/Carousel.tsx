import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, Animated } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "1",
    uri: "https://th.bing.com/th?id=OIP.2F-Ko2GI8Y_8RelOGsZ0eQHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    id: "2",
    uri: "https://th.bing.com/th?id=OIP.dRTYFpKoM08-5qzwy8KCkAHaEt&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    id: "3",
    uri: "https://th.bing.com/th?id=OIP.UkcBJmE0Vob7Bfx9pn3XDgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    id: "4",
    uri: "https://th.bing.com/th?id=OIP.hBHdeNoZZ4_FcwNVYfROjQHaFX&w=293&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
];

const Carousel = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        data={images}
        className="rounded-md rounded-br-md"
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <Image
            className="rounded-md shadow-md mr-5"
            source={{ uri: item.uri }}
            style={{ width, height: 250, borderRadius: 10 }}
          />
        )}
      />

      {/* Pagination Indicators */}
      <View style={{ flexDirection: "row", position: "absolute", bottom: 10 }}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              width * (index - 1),
              width * index,
              width * (index + 1),
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#000",
                marginHorizontal: 5,
                opacity,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
