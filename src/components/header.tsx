import * as React from "react"
import config from "../../gatsby-config";
import {Link} from "gatsby";
import styled from "styled-components"

const Header = ({location}: { location: Location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { siteMetadata }  = config as { siteMetadata: SiteMetadata }
  let siteName

  if (isRootPath) {
    siteName = <h1 className="logo">{siteMetadata.title}</h1>
  } else {
    siteName = <p className="logo"><Link to={rootPath}>{siteMetadata.title}</Link></p>
  }
  return (
      <HeaderWrapper>
        <div className="container">
          {siteName}
          <nav>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/">技術系</Link>
              </li>
              <li>
                <Link to="/">イベントレポート</Link>
              </li>
              <li>
                <Link to="/">生活</Link>
              </li>
              <li>
                <Link to="/">用語集</Link>
              </li>
              <li>
                <Link to="/management/how-about-this-blog">このブログについて</Link>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderWrapper>
  )
}
export default Header

const HeaderWrapper = styled.header`
  //ここにcssを記述していく
`