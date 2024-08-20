const products = [
    {
        id: 101,
        name: 'Laptop',
        price: 1200,
        categories: ['Electronics', 'Computers'],
        details: {
            weight: 1.5,
            dimensions: { length: 35, width: 24, height: 2 }
        }
    },
    {
        id: 102,
        name: 'Phone',
        price: 800,
        categories: ['Electronics', 'Mobiles'],
        details: {
            weight: 0.2,
            dimensions: { length: 15, width: 7, height: 0.8 }
        }
    },
    {
        id: 103,
        name: 'Desk Chair',
        price: 150,
        categories: ['Furniture'],
        details: {
            weight: 7.0,
            dimensions: { length: 60, width: 60, height: 90 }
        }
    }
];


// funtion to display products information
function displayProductsInfo(product) {
    const {
        name,
        price,
        categories,
        details: {
            weight,
            dimensions: { length, width, height }
        }
    } = product;

    console.log(`Product Brought: ${name}`);
    console.log(`Product Price: ${price}`);
    console.log(`Categories: ${categories.join(', ')}`);
    console.log(`Product Weight: ${weight} kg`);
    console.log(`Dimensions: Length: ${length} cm, Width: ${width} cm Height: ${height} cm `)
    console.log(''); // Empty line for better readability
    console.log(''); // Empty line for better readability
}

// Loop through the students array and call displayStudentInfo for each student
products.forEach(displayProductsInfo);

const numberOfProducts = products.length;

// Bonus Task: Calculate and log the average price of all products
const totalPrice = products.reduce((sum, { price }) => sum + price, 0);
const averagePrice = totalPrice / products.length;

console.log(`Average Price: $${averagePrice.toFixed(2)}`);