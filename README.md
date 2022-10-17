# jp-table

A small and understandable table witch supports sorting.
Supporting headless table.

## Demo

https://satachito.github.io/jp-table/

## Sample

### Static HTML & CSS

```
<link rel="stylesheet" href=_.css>

<jp-table
	json='{"head":["date","name","grade","winner"],"body":[[20181125,"Japan Cup","G1","Almond Eye"],[20181125,"Keihan Hai","G3","Danon Smash"],[20190120,"Tokai S.","G2","Inti"],[20190120,"American Jockey Club Cup","G2","Sciacchetra"]]}'
></jp-table>

<script src=_.js></script>
```

### Dynamic creation & CSS

```
<link rel="stylesheet" href=_.css>

<body>
<script src=_.js></script>
<script>
const
data = {
	head: [ 'date', 'name', 'grade', 'winner' ]
,	body: [
		[ 20181125, "Japan Cup" 				, "G1", "Almond Eye"	]
	,	[ 20181125, "Keihan Hai"				, "G3", "Danon Smash"	]
	,	[ 20190120, "Tokai S."					, "G2", "Inti"			]
	,	[ 20190120, "American Jockey Club Cup"	, "G2", "Sciacchetra"	]
	]
}
document.body.appendChild( new JPTable( data ) )
</script>
</body>
```

### Attaching data after element creation

```
<link rel="stylesheet" href=_.css>
<jp-table id=JT></jp-table>
<script src=_.js></script>
<script>
JT.data(
	{	head: [ 'date', 'name', 'grade', 'winner' ]
	,	body: [
			[ 20181125, "Japan Cup" 				, "G1", "Almond Eye"	]
		,	[ 20181125, "Keihan Hai"				, "G3", "Danon Smash"	]
		,	[ 20190120, "Tokai S."					, "G2", "Inti"			]
		,	[ 20190120, "American Jockey Club Cup"	, "G2", "Sciacchetra"	]
		]
	}
)
</script>
```

## Headless

Supply body only

```
<link rel="stylesheet" href=_.css>

<jp-table
	json='[[20181125,"Japan Cup","G1","Almond Eye"],[20181125,"Keihan Hai","G3","Danon Smash"],[20190120,"Tokai S.","G2","Inti"],[20190120,"American Jockey Club Cup","G2","Sciacchetra"]]'
></jp-table>

<script src=_.js></script>
```
