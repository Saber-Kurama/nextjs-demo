/*
 * @Author: saber
 * @Date: 2022-04-11 17:00:09
 * @LastEditTime: 2022-04-11 17:22:10
 * @LastEditors: saber
 * @Description: 
 */
import SwaggerUI from 'swagger-ui-react';
import { createSwaggerSpec } from 'next-swagger-doc';
import 'swagger-ui-react/swagger-ui.css';

const ApiDoc = ({ spec } ) => {
  // return <div>sadasd</div>
  return <SwaggerUI  spec={spec} />;
};

export const getStaticProps = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'pages/api',
    // schemaFolders: ['models'],
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
  });
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;