/**
 * @swagger
 * tags:
 *   name: message
 *   description: 消息
 */
/**
 * @swagger
 *
 * components:
 *   links:
 *     UserRepositories:
 *       operationId: getRepositoriesByOwner
 *       parameters:
 *         username: '$response.body#/username'
 *   schemas:
 *     user:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            description: '用户名'
 *          uuid:
 *            type: string
 */

/**
 * @swagger
 *  /api/message/list:
 *    get:
 *      tags:
 *        - message
 *      description: 获取消息列表
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 */
const handler = (_req, res) => {
  res.status(200).json({
    result: "hello world",
  });
};

export default handler;
