/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 14:27:36
 */
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import NavMenu from "../nav";
import { get } from "../../utils/request";
import { IMenuConfig, IMenuResponse, INavConfig } from '../../interfaces/menu';

interface IMenu {
  onToggleSideBar: () => void;
}

const Menu: React.FC<IMenu> = (props) => {
  const { onToggleSideBar } = props;
  const [scroll, setScroll] = useState<boolean>(false);
  const [isToggled, setToggled] = useState<boolean>(false);
  const [size, setSize] = useState<number>(0);
  const [menuData, setMenuData] = useState<IMenuConfig[]>([]);
  const [navData, setNavData] = useState<INavConfig[]>([]);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const fetchMenu = useCallback(async () => {
    const response = await get('menu') as IMenuResponse;
    setMenuData(response.menu);
    setNavData(response.nav);
  }, []);

  console.info(navData);

  useEffect(() => {
    fetchMenu().then(() => console.info('menu and nav fetched'));
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if ( scrollCheck !== scroll ) {
        setScroll(scrollCheck);
      }
    };

    /* 绑定 onScroll 事件*/
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    return window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
        <div className="container align-self-center position-relative">
          <div className="main-nav float-left ">
            <nav>
              <ul className="main-menu d-none d-lg-inline font-small">
                {
                  menuData.map((menu, index) => {
                    if ( menu.type === 'common' ) {
                      return (
                        <li key={index}>
                          <Link to={menu.link}>
                            {menu.icon ? <i className={classNames(menu.icon, 'mr-5')} /> : null}
                            {menu.label}
                          </Link>
                        </li>
                      );
                    }

                    if ( menu.type === 'sub' ) {
                      return (
                        <li className="menu-item-has-children" key={index}>
                          <Link to={menu.link}>
                            {menu.icon ? <i className={classNames(menu.icon, 'mr-5')} /> : null}
                            {menu.label}
                          </Link>
                          {menu.children.length !== 0 ? (
                            <ul className="sub-menu text-muted font-small">
                              {
                                menu.children.map((child, childIndex) => {
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
                          ) : null}
                        </li>
                      )
                    }

                    if ( menu.type === 'mega' ) {
                      return (
                        <li key={index} className="current-item has-mega-menu">
                          <Link to={menu.link}>
                            {menu.icon ? <i className={classNames(menu.icon, 'mr-5')} /> : null}
                            {menu.label}
                          </Link>
                          {
                            menu.children.length !== 0 ? (
                              <ul className="mega-menu">
                                {
                                  menu.children.map((child, childIndex) => {
                                    return (
                                      <li key={childIndex} className="sub-mega-menu sub-mega-menu-width-22">
                                        <Link to={child.link}>
                                          <strong>{child.label}</strong>
                                        </Link>
                                        {
                                          child.children?.length !== 0 ? (
                                            <ul>
                                              {
                                                child.children?.map((subChild, subChildIndex) => {
                                                  return (
                                                    <li key={subChildIndex}>
                                                      <Link to={subChild.link}>
                                                        {subChild.label}
                                                      </Link>
                                                    </li>
                                                  );
                                                })
                                              }
                                            </ul>
                                          ) : null
                                        }
                                      </li>
                                    );
                                  })
                                }
                              </ul>
                            ) : null
                          }
                        </li>
                      )
                    }

                  })
                }
              </ul>

              <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                <button onClick={toggleTrueFalse}>
                  <span className="menu-icon mr-10">
                    <span className="menu-icon-inner" />
                  </span>
                  导航
                </button>
                <NavMenu navData={navData} visible={isToggled} />
              </div>
            </nav>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Menu);
