import * as FileSystem from 'expo-file-system';
import { changeImage } from '../../db';

export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = ( userId, image ) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
            const result = await changeImage(userId, Path)
        } catch (error) {
            console.log(error.message);
            throw error;
        }

        dispatch({ type: ADD_IMAGE, payload: { image: Path } })
    }
}