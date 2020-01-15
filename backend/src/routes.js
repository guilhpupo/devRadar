//MÉTODOS HTTP: GET, POST, PUT, DELETE

//TIPO DE PARÂMETROS
//Query params: req.query (filtros, paginação, ordenação, ...), 90% das vezes usado no GET
//Route params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

/* EXEMPLO QUERY PARAMS
routes.get('/users', (req,res) => {
    console.log(req.query);
    return res.json({message : 'Hello Omnistack'});
});
*/

/* EXEMPLO ROUTE PARAMS
routes.delete('/users/:id', (req,res) => {
    console.log(req.params);
    return res.json({message : 'Hello Omnistack'});
});
*/

/* EXEMPLO BODY
routes.post('/users', (req,res) => {
    console.log(req.body);
    return res.json({message : 'Hello Omnistack'});
});
*/

const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.delete('/devs/:github_username', DevController.destroy);
routes.put('/devs/:github_username', DevController.update);

routes.get('/search', SearchController.index);

module.exports = routes;