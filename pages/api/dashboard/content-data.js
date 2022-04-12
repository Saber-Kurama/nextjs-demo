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
 *     ContentDataRecord:
 *        type: object
 *        properties:
 *          x:
 *            type: string
 *            description: 'x 值'
 *          y:
 *            type: number
 *            description: 'y 值'
 */
/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Result«List«ContentDataRecord»»:
 *        type: object
 *        properties:
 *          code:
 *            type: string
 *          data:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/ContentDataRecord'
 *          desc:
 *            type: string
 *          success:
 *            type: bollean
 */
/**
 * @swagger
 *  /api/dashboard/content-data:
 *    get:
 *      tags:
 *        - dashboard
 *      description: 获取内容数据
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result«List«ContentDataRecord»»'
 */
 const handler = (_req, res) => {
  res.status(200).json({
    result: "hello world",
  });
};

export default handler;
