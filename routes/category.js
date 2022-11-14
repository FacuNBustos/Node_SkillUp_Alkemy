const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const createSchema = require('../schemas/categories/create.schema');
const createCategory = require('../controllers/categories/create.category');
const updateCategory = require('../controllers/categories/update.category');
const getByIdSchema = require('../schemas/categories/getById.schema');
const getByIdCategory = require('../controllers/categories/getById.category');
const getAllCategories = require('../controllers/categories/getAll.category');
const updateSchema = require('../schemas/categories/update.schema');
const deleteSchema = require('../schemas/categories/delete.schema');
const deleteCategory = require('../controllers/categories/delete.category')

const router = express.Router();

/**
 * @openapi
 * /categories:
 *   get:
 *     tags:
 *       - Category
 *     description: Get all available categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: The categories were succesfully retrieved  
 *                 body:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     name: 
 *                       type: string
 *                       example: Category name here
 *                     description:
 *                       type: string
 *                       example: Category description here
 *                     createAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 *                     updateAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 */
router.get('/', getAllCategories.run);

/**
 * @openapi
 * /categories/{id}:
 *   get:
 *     tags:
 *       - Category
 *     description: Search for a category by its identifier
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category identifier
 *         required: true
 *         schema:
 *         type: integrer
 *         format: int64
 *     responses:
 *       200:
 *         description: "true"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Category search successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     name: 
 *                       type: string
 *                       example: Category name here
 *                     description:
 *                       type: string
 *                       example: Category description here
 *                     createAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 *                     updateAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 *       400:
 *         $ref: '#/components/responses/400Category'
 *       404:
 *         description: The category you were looking for was not found
 *         content:
 *           text/html:
 *             schema:
 *               type: html
 *               example: '<!DOCTYPE html>
 *                        <html lang="en">
 *                        <head>
 *                        <meta charset="utf-8">
 *                        <title>Error</title>
 *                        </head>
 *                        <body>
 *                        <pre>NotFoundError: [Error seaching by id category] - [category - GET]: The category could not be found<br></pre>
 *                        </body>
 *                        </html>'
 *
 */
router.get('/:id', schemaValidator(getByIdSchema), getByIdCategory.run);

/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - Category
 *     description: Create a new category
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *           example:
 *             name: Category name here
 *             description: Category description here
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Created
 *                 code:
 *                   type: number
 *                   example: 201
 *                 message: 
 *                   type: string
 *                   example: The category was succesfully created
 *                 body:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: Category name here
 *                     description:
 *                       type: string
 *                       example: Category description here
 *                     createAt:
 *                       type: date
 *                       example: 2022-11-10T15:40:06.782Z
 *                     updateAt:
 *                       type: date
 *                       example: 2022-11-10T15:40:06.782Z
 *       400:
 *         $ref: '#/components/responses/400Category'   
 */
router.post('', schemaValidator(createSchema), createCategory.run);

/**
 * @openapi
 * /categories/{id}:
 *   put:
 *     tags:
 *       - Category
 *     description: Modify the values of a category by its identifier 
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category identifier
 *         required: true
 *         schema:
 *         type: integrer
 *         format: int64
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *           example:
 *             name: Category name here
 *             description: Category description here
 *     responses:
 *       201:
 *         description: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message: 
 *                   type: string
 *                   example: The category was successfully updated
 *       400:
 *         $ref: '#/components/responses/400Category'
 *       404:
 *         description: The category you want to update has not been found
 *         content:
 *           text/html:
 *             schema:
 *               type: html
 *               example: '<!DOCTYPE html>
 *                        <html lang="en">
 *                        <head>
 *                        <meta charset="utf-8">
 *                        <title>Error</title>
 *                        <body>
 *                        <pre>NotFoundError: [Error updating category] - [category - UPDATE]: The category could not be found<br></pre>
 *                        </body>
 *                        </html>'
 *
 */
 router.put('/:id', schemaValidator(updateSchema), updateCategory.put);

/**
 * @openapi
 * /categories/{id}:
 *   delete:
 *     tags:
 *       - Category
 *     description: Delete a category by its identifier
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category identifier
 *         required: true
 *         schema:
 *         type: integrer
 *         format: int64
 *     responses:
 *       200:
 *         description: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message: 
 *                   type: string
 *                   example: The category was successfully deleted
 *       400:
 *         $ref: '#/components/responses/400Category'
 *       404:
 *         description: The category to delete was not found
 *         content:
 *           text/html:
 *             schema:
 *               type: html
 *               example: '<!DOCTYPE html>
 *                        <html lang="en">
 *                        <head>
 *                        <meta charset="utf-8">
 *                        <title>Error</title>
 *                        </head>
 *                        <body>
 *                        <pre>NotFoundError: [Error deleting category] - [category - DELETE]: The category could not be found<br></pre>
 *                        </body>
 *                        </html>'
 */
router.delete('/:id', schemaValidator(deleteSchema), deleteCategory.delete)

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         name:
 *           description: Category name
 *           type: string
 *           required: true
 *         description:
 *           description: Category description
 *           type: string
 *           required: false
 *   responses:
 *     400Category:
 *       description: Absence or mistake in any of the entered fields
 *       content:
 *         text/html:
 *          schema:
 *            type: html
 *            example: '<!DOCTYPE html>
 *                      <html lang="en">
 *                      <head>
 *                      <meta charset="utf-8">
 *                      <title>Error</title>
 *                      </head>
 *                      <body>
 *                      <pre>BadRequestError: [ Error retrieving schema validator - [ Path : {} ] { Errors : [] ] } ]</pre>
 *                      </body>
 *                      </html>'
 */

module.exports = router;
