import React, { useEffect, useState } from 'react';

import { getFooterHTML, getSystemName } from '../helpers';
import { Layout } from "@douyinfe/semi-ui";

const Footer = () => {
  const systemName = getSystemName();
  return (
    <Layout>
      <Layout.Content style={{ textAlign: 'center' }}>
        {footer ? (
          <div
            className='custom-footer'
            dangerouslySetInnerHTML={{ __html: footer }}
          ></div>
        ) : (
          <div className='custom-footer'>
            星芸AI API {process.env.REACT_APP_VERSION} - 提供稳定高效的企业级API服务。
            <br />
            版权所有 © {new Date().getFullYear()} 星芸AI。
          </div>
        )}
      </Layout.Content>
    </Layout>
  );
};
export default Footer;