/*
 * @Author: saber
 * @Date: 2022-04-11 17:19:42
 * @LastEditTime: 2022-04-11 17:19:43
 * @LastEditors: saber
 * @Description: 
 */
import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next Swagger API Example',
      version: '0.1.0',
    },
  },
  schemaFolders: ['models'],
});
export default swaggerHandler();