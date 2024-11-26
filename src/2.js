export function showSpecials(obj)
{
    let result = [];

    for (let i = 0; i < obj.special.length; i++)
    {
        let {id, name, icon, description = 'Описание недоступно'} = obj.special[i];

        result.push({id, name, icon, description});
    }

    return result;
}
