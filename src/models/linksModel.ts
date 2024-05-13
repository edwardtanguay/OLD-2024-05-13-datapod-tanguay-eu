import originalLinks from '../data/links.json';
import * as qstr from '../qtools/qstr';

// INTERFACE

export interface ILink {
	uuid: string,
	url: string,
	title: string,
	description: string,
	tags: string,
}

// ITEMS

export const links: ILink[] = [];
originalLinks.forEach(originalLink => {
	const link: ILink = {
		uuid: originalLink.uuid,
		title: originalLink.title,
		description: originalLink.description,
		url: originalLink.url,
		tags: originalLink.tags,
	}
	links.push(link);
});

// PUBLIC FUNCTIONS

export const getLinks = () => {
	return links;
}

export const getLinksWithTag = (tag: string) => {
	return links.filter(m => qstr.idCodeListContainsIdCode(m.tags, tag));
}