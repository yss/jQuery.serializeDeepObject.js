# jQuery.serializeDeepObject.js

the upgrade of jQuery.serializeObject.js，specially for the application use mongodb, nosql database.

## Note

It is only support `number` when resolve the value.

Also you can add `data-value-type="number"` in the node attributes for the type is not `number`.

### Such as

``` html
<!-- Normal -->
<input type="cityId" name="cityId" value="1" step="any" />

<!-- Other -->
<input type="hidden" name="cityId" data-value-type="number" value="1" />
<select name="country" data-value-type="number"><option value="1">china</option></select>

<input type="radio" name="sex" data-value-type="number" value="0" /> man
<input type="radio" name="sex" data-value-type="number" value="1" /> female

<input type="checkbox" name="scores" data-value-type="number" value="50" /> 50
<input type="checkbox" name="scores" data-value-type="number" value="60" /> 60
```

## Example

``` html
<form>
    <input type="text" name="user[0].name" value="bob" />
    <input type="number" name="user[0].age" value="16" />
    <input type="text" name="user[1].name" value="aoo" />
    <input type="checkbox" name="school" value="MIT" checked /> 
    <input type="radio" name="sex" data-value-type="number" value="0" checked />
    <select name="city" data-value-type="number">
        <option value="1">city1</option>
        <option value="2">city2</option>
    </select>
</form>
<script src="jQuery.serializeDeepObject.js"></script>
console.log($(form).eq(0).serializeDeepObject());
</script>
```

The Output is:

``` js
{
    user: [
        {
            name: "bob",
            age: 16
        },
        {
            name: "aoo"
        }
    ],
    school: ["MIT"],
    sex: 0,
    city: 1
}
```

## TODO

1. More value-type support and extended. such as type="date" => timestamp.
2. Transfer type="date" width type="time" => type="datetime".
3. And else? I am thinking...
