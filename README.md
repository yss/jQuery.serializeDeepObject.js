# jQuery.serializeDeepObject.js

the upgrade of jQuery.serializeObject.js，specially for use mongodb, nosql database.

## Example

``` html
<form>
    <input type="text" name="user[0].name" value="bob" />
    <input type="number" name="user[0].age" value="16" />
    <input type="text" name="user[1].name" value="aoo" />
    <input type="checkbox" name="school" value="MIT" checked /> 
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
    school: ["MIT"]
}
```
