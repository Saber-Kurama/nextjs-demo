/**
   * @swagger
   * tags:
   *   name: message
   *   description: 消息
   */
/**
 * @swagger
 * /message/list:
 *   get:
 *     tags:
 *        - message
 *     description: 获取消息列表
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