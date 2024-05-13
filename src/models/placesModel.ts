import originalPlaces from '../data/places.json';
import * as qstr from '../qtools/qstr';

// INTERFACE

export interface IPlace {
	idCode: string,
	title: string,
	description: string,
	tags: string,
	latitude: number
	longitude: number
	googleMapUrl: string;
}

// ITEMS

export const places: IPlace[] = [];
originalPlaces.forEach(originalPlace => {
	const place: IPlace = {
		idCode: originalPlace.idCode,
		title: originalPlace.title,
		description: originalPlace.description,
		tags: originalPlace.tags,
		latitude: originalPlace.latitude,
		longitude: originalPlace.longitude,
		googleMapUrl: `http://maps.google.com?q=${originalPlace.latitude},${originalPlace.longitude}`
	}
	places.push(place);
});

// PUBLIC FUNCTIONS

export const getPlaces = () => {
	return places;
}

export const getPlacesWithTag = (tag: string) => {
	return places.filter(m => qstr.idCodeListContainsIdCode(m.tags, tag));
}