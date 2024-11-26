export function orderByProps(obj, arr) {
    let result = [];

    let objSorted = Object.keys(obj).sort();

    let indexArr = 0;

    let indexSorted = 0;

    for (let i = 0; i < objSorted.length; i++)
    {
        if (arr[indexArr] in obj)
        {
            result.push({key: arr[indexArr], value: obj[arr[indexArr]]});
            indexArr++;
        } else
        {
            if (objSorted[indexSorted] in arr)
            {
                continue;
            }
            result.push({key: objSorted[indexSorted], value: obj[objSorted[indexSorted]]});
            indexSorted++;
        }
    }

    return result;
}


// [
//     {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//     {key: "level", value: 2}, // порядок взят из массива с ключами
//     {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//     {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//     {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
//   ]