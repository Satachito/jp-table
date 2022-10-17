# jp-table

A small and understandable table witch supports sorting.
Supporting headless table.

## Demo

https://satachito.github.io/jp-table/

## Sample

### Static HTML & CSS

Change path to .js and .css files to point those right location.<br>
ex)<br>
If you installed jp-table by NPM, the .js file's path may be `@satachito/jp-table/jp-table.js`<br>

```
<link rel="stylesheet" href=jp-table.css>

<jp-table
	json='{"head":["date","name","grade","winner"],"body":[[20181125,"Japan Cup","G1","Almond Eye"],[20181125,"Keihan Hai","G3","Danon Smash"],[20190120,"Tokai S.","G2","Inti"],[20190120,"American Jockey Club Cup","G2","Sciacchetra"]]}'
></jp-table>

<script src=jp-table.js></script>
```

### Dynamic creation & CSS

```
<link rel="stylesheet" href=jp-table.css>

<body>
<script src=jp-table.js></script>
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
<link rel="stylesheet" href=jp-table.css>
<jp-table id=JT></jp-table>
<script src=jp-table.js></script>
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
<link rel="stylesheet" href=jp-table.css>

<jp-table
	json='[[20181125,"Japan Cup","G1","Almond Eye"],[20181125,"Keihan Hai","G3","Danon Smash"],[20190120,"Tokai S.","G2","Inti"],[20190120,"American Jockey Club Cup","G2","Sciacchetra"]]'
></jp-table>

<script src=jp-table.js></script>
```
