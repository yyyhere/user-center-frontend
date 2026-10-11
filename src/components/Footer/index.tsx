import { GithubOutlined } from '@ant-design/icons';
// import packageJson from '@root/package.json';  有仓库了用
import { Divider } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';

// 有仓库了用
// const getRepoUrl = () => {
//   if (!packageJson.repository)
//     return 'https://github.com/ant-design/ant-design-pro';
//   const repo =
//     typeof packageJson.repository === 'string'
//       ? packageJson.repository
//       : (packageJson.repository as { url: string }).url;
//   const match = repo.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
//   if (!match) return 'https://github.com/ant-design/ant-design-pro';
//   return `https://github.com/${match[1]}/${match[2]}`;
// };
//
// const REPO_URL = getRepoUrl();

const REPO_URL = 'https://github.com/yyyhere?tab=repositories';

// const COMMIT_HASH = process.env.COMMIT_HASH || '';  有仓库了用

const useStyles = createStyles(({ token, css }) => ({
  footer: css`
    padding: 16px 24px;
    text-align: center;
    color: ${token.colorTextDescription};
    font-size: 19px;
    line-height: ${token.lineHeight};
    background: transparent;
  `,
  copyright: css`
    margin-bottom: 6px;
  `,
  link: css`
    color: ${token.colorTextDescription};
    text-decoration: none;
    transition: color ${token.motionDurationMid};

    &:hover {
      color: ${token.colorText};
    }
  `,
  meta: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px 12px;
    font-family: ${token.fontFamilyCode};
    font-size: 18px;
  `,
  group: css`
    display: inline-flex;
    align-items: center;
    gap: 4px;
  `,
  label: css`
    color: ${token.colorTextQuaternary};
  `,
  divider: css`
    display: inline-block;
    vertical-align: middle;
  `,
}));

const Footer: React.FC = () => {
  const { styles } = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>MissYang 出品 &copy; {year}</div>
      <div className={styles.meta}>
        {/*<span className={styles.group}>*/}
        {/*   有仓库了用 */}
        {/*  {COMMIT_HASH && (*/}
        {/*    <a*/}
        {/*      className={styles.link}*/}
        {/*      href={`${REPO_URL}/commit/${COMMIT_HASH}`}*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      {COMMIT_HASH.slice(0, 7)}*/}
        {/*    </a>*/}
        {/*  )}*/}
        {/*</span>*/}

        <a
          className={styles.link}
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined style={{ marginRight: 4 }} />
          MissYang GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
