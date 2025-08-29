import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function SwipeExample() {
  const [swipeRight, setSwipeRight] = useState(false);

  const onSwipeRight = () => setSwipeRight(true);
  const onSwipeLeft = () => setSwipeRight(false);

  return (
    <GestureRecognizer
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={[styles.container, swipeRight ? styles.right : styles.left]}
    >
      <Text style={styles.text}>
        {swipeRight ? 'Swiped Right' : 'Swiped Left'}
      </Text>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    backgroundColor: 'lightgreen',
  },
  left: {
    backgroundColor: 'lightcoral',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
