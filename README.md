# JFormat [![Build Status](https://travis-ci.org/TiagoDanin/JFormat.svg?branch=master)](https://travis-ci.org/TiagoDanin/JFormat)
[![NPM](https://nodei.co/npm/jformat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jformat/)
Python function str.format for JavaScript


# Used

```javascript
string.fomart(table, hide_if_hull)`
```

or

```javascript
format(string, table, hide_if_hull)
````

# Exemples
```javascript
"Forever {Python}".format({Python: "JavaScript"});
```
> "Forever JavaScript"

```javascript
"Forever {0}".format(["JavaScript"]);
```
> "Forever JavaScript"

```javascript
"Forever {Java}".format({}, true);
```
> "Forever 

:^)

```javascript
format("Forever {Python}", {Python: "JavaScript"});
```
> "Forever JavaScript"

```javascript
format("Forever {0}", ["JavaScript"]);
```
> "Forever JavaScript"

```javascript
format("Forever {Java}", {}, true);
```
> "Forever 

:^)
