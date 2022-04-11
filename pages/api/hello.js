/*
 * @Author: saber
 * @Date: 2022-04-11 17:20:38
 * @LastEditTime: 2022-04-11 17:38:06
 * @LastEditors: saber
 * @Description: 
 */
// import { NextApiRequest, NextApiResponse } from 'next';
/**
   * @swagger
   * tags:
   *   name: saber
   *   description: User management and login
   */
/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags:
 *        - saber
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = (_req, res) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;