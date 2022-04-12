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
 *     MessageRecord:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *            description: 'ID'
 *          type:
 *            type: string
 *            description: '类型'
 *          title:
 *            type: string
 *            description: '消息标题'
 *          subTitle:
 *            type: string
 *            description: '消息副标题'
 *          avatar:
 *            type: string
 *            description: '头像'
 *          content:
 *            type: string
 *            description: '消息内容'
 *          time:
 *            type: string
 *            description: '消息内容'
 *          status:
 *            type: string
 *            description: '消息内容'
 *          messageType:
 *            type: string
 *            description: '消息内容' 
 */

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Result«MessageRecord»:
 *        type: object
 *        properties:
 *          code:
 *            type: string
 *          data:
 *            $ref: '#/components/schemas/MessageRecord'
 *          desc:
 *            type: string
 *          success:
 *            type: bollean
 */

/**
 * @swagger
 *  /api/message/read:
 *    post:
 *      tags:
 *        - message
 *      description: 获取消息列表
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ids:
 *                  description: 'id数组' 
 *                  type: array
 *                  items:
 *                    type: number
 *
 *      responses:
 *        200:
 *          description: OK
 *          content:
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
