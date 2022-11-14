const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const { login } = require('../controllers/auth/login.auth');
const loginSchema = require('../schemas/auth/login.schema');

const router = express.Router();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Login
 *     description: Authenticate user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *           example:
 *             email: Registered user email here
 *             password: Registered user password here
 *     responses:
 *       200:
 *         description: Login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Logged
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: The user was succesfully logged
 *                 body:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: token for user logged
 *       400:
 *         $ref: '#/components/responses/400Login'
 */
router.post('/login', schemaValidator(loginSchema), login);

/**
 * @openapi
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           description: User email
 *           type: string
 *           required: true
 *         password:
 *           description: User password
 *           type: string
 *           required: true
 *   responses:
 *     400Login:
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
