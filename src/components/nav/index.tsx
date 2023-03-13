/**
 * @File 公共组件 - Nav
 * @Author author@static.vip
 * @Date 2023/2/23 14:53:08
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MetisMenu from 'metismenujs';
import 'metismenujs/style';
import { ICategory } from '../../interfaces/category';

interface INavMenu {
  visible: boolean;
  navData: ICategory[];
}

const NavMenu: React.FC<INavMenu> = (props) => {
  const { visible, navData } = props;

  useEffect(() => {
    if ( visible ) {
      new MetisMenu("#metismenu");
    }
  }, [visible]);

  return (
    <>
      <div className={visible ? "mobilemenu active" : "mobilemenu hide"}>
        <PerfectScrollbar>
          <ul className="metismenu text-muted" id="metismenu">
            {
              navData.map((nav, index) => {
                if ( nav.children === undefined || nav.children?.length === 0 ) {
                  return (
                    <li key={index}>
                      <Link to={nav.link}>
                        {nav.label}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={index}>
                    <Link to={nav.link} className="has-arrow">
                      {nav.label}
                    </Link>
                    <ul>
                      {
                        nav.children?.map((child, childIndex) => {
                          return (
                            <li key={childIndex}>
                              <Link to={child.link}>
                                {child.label}
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                );
              })
            }
          </ul>
        </PerfectScrollbar>
      </div>

    </>
  );
};

export default NavMenu;
