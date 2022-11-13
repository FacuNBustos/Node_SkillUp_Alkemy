const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const { userLogged } = require('../middlewares/userLogged');
const { ownershipValidator } = require('../middlewares/ownershipValidator');
const { getById } = require('../controllers/transactions/getById.transaction');
const { get } = require('../controllers/transactions/getAll.transaction');
const { deleteOne } = require('../controllers/transactions/delete.transaction');
const idSchema = require('../schemas/transactions/getById.schema');
const updateSchema = require('../schemas/transactions/update.schema');
const {updateById} = require('../controllers/transactions/updateById.transaction');
const deleteSchema = require('../schemas/transactions/delete.schema');
const { post } = require('../controllers/transactions/create.transaction');
const createSchema = require('../schemas/transactions/create.schema');
const tokenGenerator = require('../middlewares/tokenGenerator');

const router = express.Router();

/**
 * @openapi
 * /transactions:
 *   get:
 *     tags:
 *       - Transactions
 *     description: Get all available transactions
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Number of items for pagination
 *         required: false
 *         schema:
 *         type: string
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
 *                   example: The transactions were succesfully retrieved  
 *                 body:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     name: 
 *                       type: string
 *                       example: Transaction name here
 *                     description:
 *                       type: string
 *                       example: Transaction description here
 *                     createAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 *                     updateAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 */
 router.get('/', userLogged, get, tokenGenerator.tokenGen);

/**
  * @openapi
  * /transactions/{id}:
  *   get:
  *     tags:
  *       - Transactions
  *     description: Get a transaction by its identifier 
  *     parameters:
  *       - name: id
  *         in: path
  *         description: Transaction identifier
  *         required: true
  *         schema:
  *         type: integrer
  *         format: int64
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
  *                   example: The transaction was successfully listed
  *       400:
  *         $ref: '#/components/responses/400Transactions'
  *       404:
  *         description: The transaction you want to get has not been found
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
  *                        <pre>NotFoundError: [Error getting transaction] - [transaction - GET]: The transaction could not be found<br></pre>
  *                        </body>
  *                        </html>'
  *
  */
 router.get('/:id', schemaValidator(idSchema), userLogged, ownershipValidator, getById, tokenGenerator.tokenGen);


 /**
  * @openapi
  * /transactions:
  *   post:
  *     tags:
  *       - Transactions
  *     description: Create a transaction  
  *     requestBody:
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Transactions'
  *           example:
  *             description: Transaction description here
  *             amount: Transaction amount here
  *             userId: Transaction user by id here
  *             categoryId: Transaction category by idhere
  *             date: Transaction date here -YYYY-MM-DD
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
  *                   example: The transaction was successfully updated
  *       400:
  *         $ref: '#/components/responses/400Transactions'
  */
  router.post('/', schemaValidator(createSchema), userLogged, post, tokenGenerator.tokenGen);

 /**
  * @openapi
  * /transactions/{id}:
  *   put:
  *     tags:
  *       - Transactions
  *     description: Modify the values of a transaction by its identifier 
  *     parameters:
  *       - name: id
  *         in: path
  *         description: Transaction identifier
  *         required: true
  *         schema:
  *         type: integrer
  *         format: int64
  *     requestBody:
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Transactions'
  *           example:
  *             description: Transaction description here
  *             amount: Transaction amount here
  *             userId: Transaction user by id here
  *             categoryId: Transaction category by idhere
  *             date: Transaction date here
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
  *                   example: The transaction was successfully updated
  *       400:
  *         $ref: '#/components/responses/400Transactions'
  *       404:
  *         description: The transaction you want to update has not been found
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
  *                        <pre>NotFoundError: [Error updating transaction] - [transaction - UPDATE]: The transaction could not be found<br></pre>
  *                        </body>
  *                        </html>'
  *
  */
  router.put('/:id', schemaValidator(updateSchema), userLogged, ownershipValidator, updateById);
 
 /**
  * @openapi
  * /transactions/{id}:
  *   delete:
  *     tags:
  *       - Transactions
  *     description: Delete a transaction by its identifier
  *     parameters:
  *       - name: id
  *         in: path
  *         description: Transaction identifier
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
  *                   example: The transaction was successfully deleted
  *       400:
  *         $ref: '#/components/responses/400Transactions'
  *       404:
  *         description: The transaction to delete was not found
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
  *                        <pre>NotFoundError: [Error deleting transaction] - [transaction - DELETE]: The transaction could not be found<br></pre>
  *                        </body>
  *                        </html>'
  */
  router.delete('/:id', schemaValidator(deleteSchema), userLogged, ownershipValidator, deleteOne);
 
 /**
  * @openapi
  * components:
  *   schemas:
  *     Transactions:
  *       type: object
  *       properties:
  *         description:
  *           description: Transaction description
  *           type: string
  *           required: false
  *         amount:
  *           description: Transaction amount
  *           type: decimal
  *           required: true
  *         userId:
  *           description: Transaction user
  *           type: integer
  *           required: true
  *         categoryId:
  *           description: Transaction category
  *           type: integer
  *           required: true
  *         date:
  *           description: Transaction date
  *           type: date
  *           required: true
  *   responses:
  *     400Transactions:
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
