import * as qstr from './qstr';

export const idCodeListContainsIdCode = (idCodeList: string, idCode: string) => {
	const idCodes = qstr.breakListIntoParts(idCodeList);
	return idCodes.includes(idCode);
}

export const breakListIntoParts = (list: string) => {
	const rawParts = list.split(',');
	const parts: string[] = [];
	rawParts.forEach(rawPart => {
		let part = rawPart.trim();
		parts.push(part);
	});
	return parts;
}

/**
 * Check if a string is empty.
 *
 * qstr.isEmpty('');
 *
 * true
 */
export const isEmpty = (line: string) => {
	if (line === undefined || line === null) {
		return true;
	}
	line = line.toString();
	if (line.trim() === '') {
		return true;
	}
	return false;
};