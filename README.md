# Frontend Helpers

## Available Functions
- Remove all empty properties of an object
- Transform OpenSearch Hits to an id array

## Functions

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

## Hooks
Update the URL without changing a state
```javascript
useQueryString()
```
Control of URL parameters
```javascript
useSearchRouter()
```