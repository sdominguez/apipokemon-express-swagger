const {Router} = require('express');
const swaggerJsdoc = require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express');

const{
    pokemonsDelete,
    pokemonsGet,
    pokemonsPatch,
    pokemonsPut,
    pokemonsPost
} = require('../controllers/pokemons');

const router = Router();

/**
 * @swagger
 * /api/pokemons:
 *   get:
 *     summary: Carga lista de pokemones
 *     tags: [Pokémon]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Pikachu
 *                   tipo:
 *                     type: string
 *                     example: Electric
 *                   imgurl:
 *                     type: string
 *                     example: http://dominio/aaaadkfkdkd.jpg
 *       500:
 *         description: Error en el servidor
 */
router.get('/', pokemonsGet);

/**
 * @swagger
 * /api/pokemons:
 *   post:
 *     summary: Agrega un nuevo pokémon
 *     tags: [Pokémon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Pikachu
 *               tipo:
 *                 type: string
 *                 example: Electric
 *               imgurl:
 *                 type: string
 *                 example: https://domininio/recurso.jpg 
 *     responses:
 *       201:
 *         description: Pokémon creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error en el servidor
 */
router.post('/', pokemonsPost);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   put:
 *     summary: Actualiza un pokémon existente
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pokémon a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Pikachu
 *               tipo:
 *                 type: string
 *                 example: Electric
 *               imgurl:
 *                 type: string
 *                 example: https://domininio/recurso.jpg 
 *     responses:
 *       200:
 *         description: Pokémon actualizado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       404:
 *         description: Pokémon no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', pokemonsPut);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   patch:
 *     summary: Actualiza url de imagen de un pokémon
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pokémon a actualizar parcialmente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgurl:
 *                 type: string
 *                 example: https://dominio/pokemon.jpg
 *     responses:
 *       200:
 *         description: Pokémon actualizado parcialmente
 *       400:
 *         description: Error en los datos enviados
 *       404:
 *         description: Pokémon no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', pokemonsPatch);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   delete:
 *     summary: Elimina un pokémon
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pokémon a eliminar
 *     responses:
 *       200:
 *         description: Pokémon eliminado exitosamente
 *       404:
 *         description: Pokémon no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', pokemonsDelete);

module.exports = router;