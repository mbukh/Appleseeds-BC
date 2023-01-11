const swap = (obj) =>
    Object.entries(obj).reduce(
        (accObj, [key, value]) => ((accObj[value] = key), accObj),
        {}
    );


{
    {  
        asdsad
    }
}

const originalObject = { 1: "a", 2: "b", 24: "z", key: "value" };
console.log(originalObject);

const swappedObject = swap(originalObject);
console.log(swappedObject);
