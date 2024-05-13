import originalItineraryItems from '../data/itineraryItems.json';
import * as qstr from '../qtools/qstr';
import * as qarr from '../qtools/qarr';
import { IPlace, places } from './placesModel';

// INTERFACE:

export interface IItineraryItem {
	idCode: string,
	title: string,
	description: string,
	start: string,
	place: string,
	tags: string,
	_place: IPlace | null
}

// ITEMS

export let itineraryItems: IItineraryItem[] = [];
originalItineraryItems.forEach(originalItineraryItem => {
	const itineraryItem: IItineraryItem = {
		idCode: originalItineraryItem.idCode,
		title: originalItineraryItem.title,
		description: originalItineraryItem.description,
		tags: originalItineraryItem.tags,
		start: originalItineraryItem.start,
		place: originalItineraryItem.place,
		_place: null
	}
	itineraryItems.push(itineraryItem);
});
itineraryItems = qarr.sortObjects(itineraryItems, 'start');

// PUBLIC FUNCTIONS

export const getItineraryItems = () => {
	return itineraryItems;
}

export const getItineraryItemsWithTag = (tag: string) => {
	return itineraryItems.filter(m => qstr.idCodeListContainsIdCode(m.tags, tag));
}

export const populateWithPlaces = (itineraryItems: IItineraryItem[]) => {
	itineraryItems.forEach(itineraryItem => {
		if (!qstr.isEmpty(itineraryItem.place)) {
			const place = places.find(m => m.idCode === itineraryItem.place);
			if (place !== undefined) {
				itineraryItem._place = place;
			}
		}
	});
}