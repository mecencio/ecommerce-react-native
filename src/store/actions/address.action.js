import { changeAddress, insertAddress, loadAddresses, removeAddress } from "../../db";
import { API_KEY } from "../../env/database";
import Address from "../../models/Address";

export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_ADDRESS_BY_COORDS = "ADD_ADDRESS_BY_COORDS";
export const GET_ADDRESSES = "GET_ADDRESSES";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_ADDRESS_BY_COORDS = "UPDATE_ADDRESS_BY_COORDS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

export const addAddress = (address) => {
    return async dispatch => {
        const formatted_address = (address.street + " " + address.number + " " +  address.city + " " + address.province + " " + address.country).split(" ").join("%2");

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formatted_address}&key=${API_KEY}`);
        if(!response.ok){
            throw new Error("We cannot communicate with Google Maps")
        }

        const data = await response.json();
        if (!data.results) {
            throw new Error("Something went wrong. The location is invalid")
        }
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;

        const result = await insertAddress(address.street, address.number, address.floor, address.city, address.province, address.country, address.information, lat, lng, address.userId);

        const newAddress = new Address(result.insertId, address.street, address.number, address.floor, address.city, address.province, address.country, address.information, lat, lng, address.userId)
        dispatch({type: ADD_ADDRESS, payload: newAddress})
    }
}

export const addAddressByCoords = ({lat, lng, userId}) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
        if(!response.ok) {
            throw new Error("We cannot communicate with Google Maps")
        }

        const data = await response.json();
        if (!data.results) {
            throw new Error("Something went wrong. The location is invalid")
        }
        const street = data.results[0].address_components[1].long_name;
        const number = data.results[0].address_components[0].long_name;
        const floor = "";
        const city = data.results[0].address_components[3].long_name;
        const province = data.results[0].address_components[4].long_name;
        const country = data.results[0].address_components[5].long_name;
        const information = "";

        const result = await insertAddress(street, number, floor, city, province, country, information, lat, lng, userId);

        const address = new Address(result.insertId, street, number, floor, city, province, country, information, lat, lng, userId)
        dispatch({type: ADD_ADDRESS_BY_COORDS, payload: address})
    }
}

export const getAddresses = (userId) => {
    return async dispatch => {
        try {
            const result = await loadAddresses(userId);
            if (!result) return
            dispatch({type: GET_ADDRESSES, payload: {addresses: result.rows._array}})
        } catch (error) {
            throw error
        }
    }
}

export const updateAddress = (address) => {
    return async dispatch => {
        const formatted_address = (address.street + " " + address.number + " " +  address.city + " " + address.province + " " + address.country).split(" ").join("%2");

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formatted_address}&key=${API_KEY}`);
        if(!response.ok){
            throw new Error("We cannot communicate with Google Maps")
        }

        const data = await response.json();
        if (!data.results) {
            throw new Error("Something went wrong. The location is invalid")
        }
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;

        console.log(address)
        const result = await changeAddress(address.id, address.street, address.number, address.floor, address.city, address.province, address.country, address.information, lat, lng);
        if (!result) {
            throw new Error("Something went wrong")
        }

        getAddresses(address.userId)

        const newAddress = new Address(address.id, address.street, address.number, address.floor, address.city, address.province, address.country, address.information, lat, lng, address.userId)
        dispatch({type: UPDATE_ADDRESS, payload: newAddress})
    }
}

export const updateAddressByCoords = (address) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${address.lat},${address.lng}&key=${API_KEY}`);
        if(!response.ok) {
            throw new Error("We cannot communicate with Google Maps")
        }

        const data = await response.json();
        if (!data.results) {
            throw new Error("Something went wrong. The location is invalid")
        }
        const street = data.results[0].address_components[1].long_name;
        const number = data.results[0].address_components[0].long_name;
        const floor = "";
        const city = data.results[0].address_components[3].long_name;
        const province = data.results[0].address_components[4].long_name;
        const country = data.results[0].address_components[5].long_name;
        const information = "";

        const result = await changeAddress(address.id, street, number, floor, city, province, country, information, address.lat, address.lng);
        if (!result) {
            throw new Error("Something went wrong")
        }
        const newAddress = new Address(address.id, street, number, floor, city, province, country, information, address.lat, address.lng, address.userId)
        dispatch({type: UPDATE_ADDRESS_BY_COORDS, payload: newAddress})
    }
}

export const deleteAddress = (id) => {
    return async dispatch => {
        await removeAddress(id);
        dispatch({type: DELETE_ADDRESS, payload: {addressId: id}})
    }
}