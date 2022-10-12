//	Case 1: HTML
//		<jp-table json='....'></jp-table>
//	Case 2: JS
//		document.body.append( new JPTable( ... ) )
//	Case 3: HTML & JS
//		<jp-table id=JT></jp-table>
//		JT.data( ... )

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
		this.sortInfo = {}
	}

	data( data ) {
		this.textContent = ''
		const table = this.appendChild( E( 'table' ) )
		if ( data.head ) {
			const thead = table.appendChild( E( 'thead' ) )
			thead.appendChild( E( 'tr' ) ).append(
				...data.head.map(
					( $, _ ) => {
						$ = E( 'th', $ )
						$.onclick = ev => {
							this.sortInfo[ _ ]
							?	data.body.sort( ( p, q ) => p[ _ ] < q[ _ ] ? 1 : -1 )
							:	data.body.sort( ( p, q ) => p[ _ ] < q[ _ ] ? -1 : 1 )
						,	this.sortInfo[ _ ] = !this.sortInfo[ _ ]
						,	this.data( data )
						}
						return $
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

