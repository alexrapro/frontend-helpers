# Frontend Helpers

## Available Functions
- Remove all empty properties of an object
- Transform OpenSearch Hits to an id array

## Example

Clear object
```javascript
objectCleaner(obj).removeEmptyFields().removeUnderscoreFields().get()
```

Remove empty props
```javascript
removeEmptyProps(obj)
```

Transform OpenSearch Hits to an id array
```javascript
transformHits(searchHit)
```