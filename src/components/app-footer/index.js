import React, { Fragment, memo } from "react";

import { AppFooterWrapper, FooterLeft, FooterRight } from "./style";
import { footerLinks ,footerImages} from "@/common/local-data"
export default memo(function KBAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {
              footerLinks.map((item,index)=>{
                return (
                  <Fragment key={item.title} >
                    <a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
          <span>网易公司版权所有©1997-2020</span>
          <span>
            huangkairan
          </span>
        </div>
        <div className="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
            举报邮箱：
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
          </span>
        </div>
        <div className="info">
          <span>浙ICP备2020037989号-1</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank">
            工业和信息化部备案管理系统网站
          </a>
        </div>
      </FooterLeft>
      <FooterRight className="right">
        {
          footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })
        }
      </FooterRight>
      </div>
    </AppFooterWrapper>
  );
});
