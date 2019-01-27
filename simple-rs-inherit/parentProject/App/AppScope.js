import superagent from "superagent";
import shortid    from "shortid";
import rscopes, {
	spells
}                 from "rscopes";

let { asStore, asScope } = spells;


export default {
	@asStore
	appState: {
		selectedPostItId: "rkUQHZrqM",
		selectPostIt( selectedPostItId ) {
			return { selectedPostItId };
		}
	},
	@asStore
	someData: {
		// initial state
		src  : "/api/hello",
		items: [{
			"_id"     : "rkUQHZrqM",
			"location": "paris",
			"size"    : { "width": 350, "height": 200 },
			"position": { "x": 321, "y": 167 }
		}, {
			"_id"     : "r1bcuMrcM",
			"location": "rio",
			"size"    : { "width": 350, "height": 200 },
			"position": { "x": 260, "y": 576 }
		}],
		
		// actions
		newPostIt() {
			return {
				items: [...this.nextState.items, {
					_id     : shortid.generate(),
					size    : { width: 350, height: 200 },
					position: {
						x: 100 + ~~(Math.random() * 600),
						y: 100 + ~~(Math.random() * 600)
					},
					text    : "New Post It #" + this.nextState.items.length
				}]
			}
		},
		updatePostIt( postIt ) {
			return {
				items: this.nextState.items
				           .map(
					           it => (it._id === postIt._id)
					                 ? postIt
					                 : it
				           )
			}
		},
		rmPostIt( postIt ) {
			return {
				items: this.nextState.items
				           .filter(
					           it => (it._id !== postIt._id)
				           )
			}
		},
		saveState() {
			superagent.post('/', this.scopeObj.serialize())
			          .then(( e, r ) => {
				          console.log(e, r)
			          })
		}
	}
}