const Promise = require('bluebird');
const { Staff, Item } = require('./server/db/models');
const db = require('./server/db');

const ITEMS = [
  {name: 'Hawaiana', price: 19.00, category: 'pizza'},
  {name: 'Americana', price: 16.00, category: 'pizza'},
  {name: 'Margarita', price: 20.00, category: 'pizza'},
  {name: 'Peperoni', price: 20.00, category: 'pizza'},
  {name: 'Argentina', price: 19.00, category: 'pizza'},
  {name: 'Vegetariana', price: 18.00, category: 'pizza'},
  {name: 'coca cola', price: 2.00, category: 'bebida'},
  {name: 'coca diet', price: 2.00, category: 'bebida'},
  {name: 'sprite', price: 2.00, category: 'bebida'},
  {name: 'inca kola', price: 2.00, category: 'bebida'},
  {name: 'chicha', price: 1.50, category: 'bebida'},
  {name: 'agua', price: 1.50, category: 'bebida'},
  {name: 'agua con gas', price: 1.50, category: 'bebida'},
  {name: 'torta de chocolate', price: 7.00, category: 'postre'},
  {name: 'panqueques', price: 6.00, category: 'postre'},
  {name: 'cheesecake', price: 7.00, category: 'postre'},
  {name: 'pan al ajo', price: 9.00, category: 'adicional'},
  {name: 'pan al ajo especial', price: 11.00, category: 'adicional'},
];

const STAFF = [
  {name: 'Sun Bak', email: 'sun@tektonpizza.com', password: 123, isAdmin: true},
  {name: 'Nomi Marks', email: 'nomi@tektonpizza.com', password: 123, isChef: true},
  {name: 'Riley Blue', email: 'riley@tektonpizza.com', password: 123, isCashier: true},
  {name: 'Wolfgang Bogdanow', email: 'wolfgang@tektonpizza.com', password: 123, isAdmin: true, isChef: true},
  {name: 'Amanita Caplan', email: 'amanita@tektonpizza.com', password: 123, isCashier: true},
  {name: 'Lito Rodriguez', email: 'lito@tektonpizza.com', password: 123, isChef: true},
];

function addRow(dataArr, table){
  return dataArr.map( rowData => table.create(rowData))
}

function seed(itemsArr, staffArr){
  return Promise.all([addRow(itemsArr, Item), addRow(staffArr, Staff)])
}

console.log('Syncing database');

db.sync({force: true})
  .then( () => {
    console.log('Seeding database')
    return seed(ITEMS, STAFF)
  })
  .then( () => {
    console.log('Seeding successful')
  })
  .catch( err => {
    console.error('Error while seeding')
    console.error(err.stack)
  })
  .finally( () => {
    db.close();
    return null;
  })
