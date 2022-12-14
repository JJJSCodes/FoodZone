const Pantry = [
    {
        img: require('../../assets/pantry/Img.png'),
        name: 'Cucumber',
        unit_measure: 'count',
        amount: 1,
    },
    {
        img: require('../../assets/pantry/Img-2.png'),
        name: 'Eggs',
        unit_measure: 'count',
        amount: 12,
    },
    {
        img: require('../../assets/pantry/Img-3.png'),
        name: 'Oranges',
        unit_measure: 'count',
        amount: 5,
    },
    {
        img: require('../../assets/pantry/Img-4.png'),
        name: 'Tomatoes',
        unit_measure: 'count',
        amount: 12,
    },
    {
        img: require('../../assets/pantry/chicken_breast.png'),
        name: 'Chicken Breast',
        unit_measure: 'count',
        amount: 8,
    }
]

const EmptyItem = {
    img: require('../../assets/pantry/groceries.png'),
    name: '',
    unit_measure: 'count',
    amount: 0,
}

export default Pantry
export { EmptyItem }