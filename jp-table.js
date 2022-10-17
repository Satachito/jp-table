/*
Setting data

	Case 1: Specify JSON in HTML
		<jp-table json="...."></jp-table>

	Case 2: Give Object in constructor
		document.body.append( new JPTable( .... ) )

	Case 3: HTML & set Object using data() method
		<jp-table id=JT></jp-table>
		JT.data( .... )

Data format: With header
{	head: [ 'date', 'name', 'grade', 'winner' ]
,	body: [
		[ 20181125, "Japan Cup" 				, "G1", "Almond Eye"	]
	,	[ 20181125, "Keihan Hai"				, "G3", "Danon Smash"	]
	,	[ 20190120, "Tokai S."					, "G2", "Inti"			]
	,	[ 20190120, "American Jockey Club Cup"	, "G2", "Sciacchetra"	]
	]
}

Data format: Headless
[
	[ 20181125, "Japan Cup" 				, "G1", "Almond Eye"	]
,	[ 20181125, "Keihan Hai"				, "G3", "Danon Smash"	]
,	[ 20190120, "Tokai S."					, "G2", "Inti"			]
,	[ 20190120, "American Jockey Club Cup"	, "G2", "Sciacchetra"	]
]
*/


const
E = ( tag, text ) => {
	const $ = document.createElement( tag )
	text && ( $.textContent = text )
	return $
}

class
JPTable extends HTMLElement {

	constructor( data ) {
		super()
		data && this.data( data )
	}

	data( data ) {
		if ( this.sortInfo ) {
			const [ _, $ ] = this.sortInfo
			data.body.sort(
				$
				?	( p, q ) => p[ _ ] < q[ _ ] ? 1 : -1
				:	( p, q ) => p[ _ ] < q[ _ ] ? -1 : 1
			)
		}
		this.textContent = ''
		const table = this.appendChild( E( 'table' ) )
		if ( data.head ) {
			const thead = table.appendChild( E( 'thead' ) )
			thead.appendChild( E( 'tr' ) ).append(
				...data.head.map(
					( $, _ ) => {
						const th = E( 'th', $ )
						th.onclick = ev => (
							this.sortInfo = [ _, this.sortInfo ? !this.sortInfo[ 1 ] : false ]
						,	this.data( data )
						)
						this.sortInfo && this.sortInfo[ 0 ] === _ && th.setAttribute( 'sort', this.sortInfo[ 1 ] )
						return th
					}
				)
			)
		}
		const tbody = table.appendChild( E( 'tbody' ) )
	;	( data.body ? data.body : data ).forEach( _ => tbody.appendChild( E( 'tr' ) ).append( ..._.map( _ => E( 'td', _ ) ) ) )
	}

	static get observedAttributes() { return [ 'json' ] }
	attributeChangedCallback( name, oldValue, newValue ) {
		name === 'json' && this.data( JSON.parse( newValue ) )
	}
}

customElements.define( 'jp-table', JPTable )

