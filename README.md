# FST POPUP SEARCH 

Simple and light wieght jQuery popup search for website.

## Installation
```bash
npm install fst-popup-search
```
># [LIVE DEMO](https://fanseethemes.github.io/fst-popup-search/)

## How to use
initialize fstPopupSearch **ALLWAYS** in document ready statement
```javascript
$(document).ready(function(){
   $('.open-search').fstPopupSearch();
})
```


## Configuration Parameters
When you call "fstPopupSearch" and can pass some parameters to custom visual aspects.

```javascript
$(".open-search").fstPopupSearch({
   action: ""  //Change action of form,
   method: "get" //Change form submit method
   closeIcon: 'SVG ICON', // Change search close icon
   clearIcon: 'SVG ICON' // Change change clear icon
   enterIcon: 'SCG ICON' // Change submit enter icon,
   placeholderText: 'Search...' //Change search input placeholder text
   labelText: 'What are you looking for?' . //Change title text
})
```

**Note**  
Above Sample object are default parameters for that closeIcon, clearIcon and enterIcon  we used the svg icons

## Coming Feature 
- Listing the search data from jQuery Ajax