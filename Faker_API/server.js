const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

const PORT = 8001;
app.listen(PORT, ()=> {
    console.log(`The server at port ${PORT} is up and running.`)
})

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        email: faker.internet.email(),
        _id: faker.random.alphaNumeric(10)
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.random.alphaNumeric(),
        name: faker.commerce.productName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        }
    }
    return newCompany;
}


const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get('/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
})

app.get('/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
})

app.get('/user/company', (req, res) => {
    const company = createCompany();
    const user = createUser();
    const userCompany = { user: user, company: company };
    res.json(userCompany);
})