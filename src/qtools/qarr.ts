/**
 * sortObjects(events, 'start');
 * 
 * Sorts the events in ascending order.
 */
export const sortObjects = (objs: any, prop: string, order: string = 'asc') => {
	let compare1 = 1;
	let compare2 = -1;
	if (order === 'desc') {
		compare1 = -1;
		compare2 = 1;
	}
	objs.sort((a: any, b: any) => (a[prop] > b[prop]) ? compare1 : ((b[prop] > a[prop]) ? compare2 : 0))
	return objs;
}