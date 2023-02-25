/**
 * @File Widget 卡片
 * @Author author@static.vip
 * @Date 2023/2/25 07:13:51
 */
import React from 'react';
import classNames from 'classnames';

interface IWidget {
    /* 标题内容 */
    header?: React.ReactNode;
    /* 标题类型 */
    headerType?: 1 | 2 | 3 | 4 | 5;
    /* 自定义类 */
    className?: string;
    /* 渲染内容 */
    children?: React.ReactNode;
}

const Widget: React.FC<IWidget> = (props) => {
    const {header, headerType = 1, className, children} = props;

    return (
        <div className={classNames('sidebar-widget', className)}>
            {header && (
                <div className={classNames(`widget-header-${headerType}`, 'position-relative', 'mb-30')}>
                    <h5 className="mt-5 mb-30">{header}</h5>
                </div>
            )}
            {children}
        </div>
    )
}

export default Widget;