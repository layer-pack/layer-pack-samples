import superagent from "superagent";
import shortid    from "shortid";

export const WIDGET_CHANGED        = 'WIDGET_CHANGED'
export const WIDGET_NEW            = 'WIDGET_NEW'
export const WIDGET_RM             = 'WIDGET_RM'
export const METEO_SEARCHING       = 'METEO_SEARCHING'
export const METEO_SEARCH_COMPLETE = 'METEO_SEARCH_COMPLETE'

// actions
export function newPostIt() {
	return {
		type  : WIDGET_NEW,
		record: {
			_id     : shortid.generate(),
			size    : { width: 350, height: 200 },
			position: {
				x: 100 + ~~(Math.random() * 600),
				y: 100 + ~~(Math.random() * 600)
			},
		}
	}
}

export function updateWidget( record ) {
	return {
		type: WIDGET_CHANGED,
		record
	}
}

export function rmPostIt( wid ) {
	return {
		type: WIDGET_RM,
		wid
	}
}

export function weatherSearch( record, location, then ) {
	
	return ( dispatch, getState ) => {
		dispatch(updateWidget(
			{
				...record,
				fetching: location
			}));
		return superagent
			.get(getState().appState.src + location)
			.then(( res ) => {
				
				dispatch(updateWidget(
					{
						...record,
						fetching: false,
						results : res.body,
						location
					}));
			})
			.catch(e => {
				
				dispatch(updateWidget(
					{
						...record,
						fetching: false,
					}));
			})
	};
}
