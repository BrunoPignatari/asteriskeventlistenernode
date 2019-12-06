const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: 'localhos',
    user: 'root',
    password: 'conecta',
    database: 'triang'
})

const ramal = connection.query('SELECT * FROM Ramal',(error, results) => {
    if(error){
        console.log('deu merda')
    }
    console.log(ramal)

})
