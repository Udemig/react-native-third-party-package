import React, {memo} from 'react';
import {Button, View} from 'react-native';

interface IButtonProps {
  onPress: () => void;
  title: string;
}

const ButtonCustom = ({onPress = () => {}, title = ''}: IButtonProps) => {
  console.log('child render');

  return (
    <View>
      <Button onPress={() => onPress()} title={title} />
    </View>
  );
};

// const customComparator = (prevProps: IButtonProps, nextProps: IButtonProps) => {
//   console.log('PrevProps ', prevProps, nextProps);
//   return nextProps.title === prevProps.title;
// };

export default memo(ButtonCustom);
