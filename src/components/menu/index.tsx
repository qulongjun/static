/**
 * @File 公共组件 - 菜单
 * @Author author@static.vip
 * @Date 2023/2/23 14:27:36
 */
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavMenu from '../nav';
import { post } from '../../utils/request';
import { ICategory } from '../../interfaces/category';
import { getCategoryUrl } from '../../utils/url';

const Menu: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isToggled, setToggled] = useState<boolean>(false);
  const [size, setSize] = useState<number>(0);
  const [category, setCategory] = useState<ICategory[]>([]);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const fetchMenu = useCallback(async () => {
    const dataSource = await post('category') as ICategory[];
    setCategory(dataSource);
  }, []);

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
                  category.map((menu, index) => {
                    if ( menu.type === 'common' ) {
                      return (
                        <li key={index}>
                          <Link to={menu.link}>
                            {menu.icon && <i className={classNames(menu.icon, 'mr-5')} />}
                            {menu.label}
                          </Link>
                        </li>
                      );
                    }

                    if ( menu.type === 'sub' ) {
                      return (
                        <li className="menu-item-has-children" key={index}>
                          <Link to={menu.link}>
                            {menu.icon ?
                              <i className={classNames(menu.icon, 'mr-5')} /> : null}
                            {menu.label}
                          </Link>
                          {Array.isArray(menu.children) && (
                            <ul className="sub-menu text-muted font-small">
                              {
                                menu.children.map((child, childIndex) => {
                                  return (
                                    <li key={childIndex}>
                                      <Link
                                        to={[menu.link, child.link].join('/')}>
                                        {child.label}
                                      </Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          )}
                        </li>
                      )
                    }

                    if ( menu.type === 'mega' ) {
                      return (
                        <li key={index} className="current-item has-mega-menu">
                          <Link to={menu.link}>
                            {menu.icon && <i className={classNames(menu.icon, 'mr-5')} />}
                            {menu.label}
                          </Link>
                          {
                            Array.isArray(menu.children) && (
                              <ul className="mega-menu">
                                {
                                  menu.children.map((child, childIndex) => (
                                    <li key={childIndex}
                                        className="sub-mega-menu sub-mega-menu-width-22">
                                      <Link
                                        to={getCategoryUrl(child.link)}>
                                        <strong>{child.label}</strong>
                                      </Link>
                                      {
                                        Array.isArray(child.children) && (
                                          <ul>
                                            {
                                              child.children.map((subChild, subChildIndex) => (
                                                <li key={subChildIndex}>
                                                  <Link
                                                    to={getCategoryUrl(subChild.link)}>
                                                    {subChild.label}
                                                  </Link>
                                                </li>
                                              ))
                                            }
                                          </ul>
                                        )
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            )
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
                <NavMenu navData={category} visible={isToggled} />
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
