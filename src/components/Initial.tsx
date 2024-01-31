import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

/*** helpers ***/
import { logError, logObject } from '../helpers';

/*** hooks ***/
import { useNknown } from '../hooks/useNknown';

/*** styles ***/
import { images, mainColors, style } from '../assets';

const styles = StyleSheet.create({
  main: {
    backgroundColor: mainColors.acid,
  },
});

export const InitialComponent = () => {
  const { fetchNknownData, fetchNknownPlanets, swPerson, swPersonByName } =
    useNknown();

  useEffect(() => {
    Promise.all([fetchNknownData({ id: 1 }), fetchNknownPlanets()]).catch(
      logError,
    );
  }, []);

  useEffect(() => {
    logObject('swPerson', swPerson);
  }, [swPerson]);

  useEffect(() => {
    logObject('swPersonByName', swPersonByName);
  }, [swPersonByName]);

  return (
    <ImageBackground
      resizeMode={'center'}
      source={images.unknown}
      style={[style.flex, styles.main]}
    />
  );
};
