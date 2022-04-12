/**
 * @swagger
 * tags:
 *   name: dashboard
 *   description: 仪表盘
 */
/**
 * @swagger
 *
 * components:
 *   schemas:
 *     PopularRecord:
 *        type: object
 *        properties:
 *          key:
 *            type: number
 *            description: 'ID'
 *          clickNumber:
 *            type: string
 *            description: 'clickNumber'
 *          title:
 *            type: string
 *            description: '标题'
 *          increases:
 *            type: string
 *            description: 'increases'
 */
/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Result«List«PopularRecord»»:
 *        type: object
 *        properties:
 *          code:
 *            type: string
 *          data:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/PopularRecord'
 *          desc:
 *            type: string
 *          success:
 *            type: bollean
 */
/**
 * @swagger
 *  /api/dashboard/popular-list:
 *    get:
 *      tags:
 *        - dashboard
 *      description: 获取消息列表
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result«List«PopularRecord»»'
 */
 const handler = (_req, res) => {
  res.status(200).json({
    result: "hello world",
  });
};

export default handler;
