const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const getAllUsersid = require('../controllers/users/getid.user');
const deleteSchema = require('../schemas/users/delete.schema');
const createSchema = require('../schemas/users/create.schema');
const { getAllUsers } = require('../controllers/users/getAllUser.js');
const { createUsers } = require('../controllers/users/create.user');
const idSchema = require('../schemas/users/getid.schema');
const updateSchema = require('../schemas/users/update.schema');
const updateUser = require('../controllers/users/update.user');

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - User
 *     description: Get all users in db
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
 *                   example: Users search successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     firstName:
 *                       type: string
 *                       example: User name here
 *                     lastName:
 *                       type: string
 *                       example: User lastName here
 *                     email:
 *                       type: string
 *                       example: User email here
 *                     createAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 */
router.get('/', getAllUsers);
/**
 * @openapi
 * /users:
 *   post:
 *     tags:
 *       - User
 *     description: Create a new user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             firstName: User first name here
 *             lastName: User last name here
 *             email: User email here
 *             password: User password here
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
 *                   example: The user was succesfully created
 *                 body:
 *                   type: object
 *                   properties:
 *                     firstName:
 *                       type: string
 *                       example: User first name here
 *                     lastName:
 *                       type: string
 *                       example: User last name here
 *                     email:
 *                       type: string
 *                       example: User email here
 *                     avatar:
 *                       type: string
 *                       example: User avatar here
 *                     roleId:
 *                       type: integer
 *                       example: User role id here
 *                     createdAt:
 *                       type: date
 *                       example: 2022-11-10T15:40:06.782Z
 *       400:
 *         $ref: '#/components/responses/400User'
 */
router.post('/', schemaValidator(createSchema), createUsers);
/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     tags:
 *       - User
 *     description: Delete a user by its identifier
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User identifier
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
 *                   example: The user was successfully deleted
 *       400:
 *         $ref: '#/components/responses/400User'
 *       404:
 *         description: The user to delete was not found
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
 *                        <pre>NotFoundError: [Error deleting user] - [user - DELETE]: The user could not be found<br></pre>
 *                        </body>
 *                        </html>'
 */
router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);
/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: Search for a user by its identifier
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User identifier
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
 *                   example: User search successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     firstName:
 *                       type: string
 *                       example: User firstName here
 *                     lastName:
 *                       type: string
 *                       example: User lastName here
 *                     email:
 *                       type: string
 *                       example: User email here
 *                     createdAt:
 *                       type: date
 *                       example: 2022-11-08T17:47:41.000Z
 *       400:
 *         $ref: '#/components/responses/400User'
 *       404:
 *         description: The user you were looking for was not found
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
 *                        <pre>NotFoundError: [Error seaching by id user] - [user - GET]: The category could not be found<br></pre>
 *                        </body>
 *                        </html>'
 *
 */
router.get('/:id', schemaValidator(idSchema), getAllUsersid.getid);
/**
 * @openapi
 * /users/{id}:
 *   put:
 *     tags:
 *       - User
 *     description: Modify the values of a user by its identifier 
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User identifier
 *         required: true
 *         schema:
 *         type: integrer
 *         format: int64
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             firstName: User first name here
 *             email: User email here
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
 *                   example: The user was successfully updated
 *       400:
 *         $ref: '#/components/responses/400User'
 *       404:
 *         description: The user you want to update has not been found
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
 *                        <pre>NotFoundError: [Error updating user] - [user - UPDATE]: The user could not be found<br></pre>
 *                        </body>
 *                        </html>'
 *
 */
router.put('/:id', schemaValidator(updateSchema), updateUser.run);
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           description: User firstName
 *           type: string
 *           required: true
 *         lastName:
 *           description: User lastName
 *           type: string
 *           required: true
 *         email:
 *           description: User email
 *           type: string
 *           required: false
 *         password:
 *           description: User password
 *           type: string
 *           required: false
 *   responses:
 *     400User:
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
