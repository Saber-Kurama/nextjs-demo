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
 *   schemas:
 *     Result«List«MessageRecord»»:
 *        type: object
 *        properties:
 *          code:
 *            type: string
 *          data:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/MessageRecord'
 *          desc:
 *            type: string
 *          success:
 *            type: bollean
 */
/**
 * @swagger
 * 
 * /api/message/list:
 *   get:
 *     tags:
 *       - message
 *     description: 获取消息列表
 *     responses:
 *       200:
 *         description: OK??
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result«List«MessageRecord»»'
 */
const handler = (_req, res) => {
  res.status(200).json({
    result: "hello world",
  });
};

export default handler;
