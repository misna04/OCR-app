import React, {useContext, createContext, useState, useEffect} from 'react';
import ApiPhotos from '../Services/ApiPhoto';

export const PhotosContext = createContext({});

export default function PhotosProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  const getPhotos = async () => {
    console.log('context here run');
    try {
      console.log('after try');
      await setLoadingPhotos(true);
      if (photos.length === 0) {
        const result = await ApiPhotos.getPhotos();
        setPhotos(result.data);
        await setLoadingPhotos(false);
        return {status: 200, result: result.data};
      } else {
        await setLoadingPhotos(false);
        return {status: 200, result: photos};
      }
    } catch (error) {
      console.log('error photo context');
      setLoadingPhotos(false);
      return {status: 400, result: error};
    }
  };

  return (
    <PhotosContext.Provider
      value={{photos, loadingPhotos, getPhotos}}
      {...props}
    />
  );
}
