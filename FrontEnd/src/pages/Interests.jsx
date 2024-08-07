import React from 'react';

function Interests() {
    return (
        <div>
            <h1>兴趣列表</h1>
            <ul>
                <li><Link to="/interest/1">兴趣1</Link></li>
                <li><Link to="/interest/2">兴趣2</Link></li>
                {/* 更多兴趣... */}
            </ul>
        </div>
    );
    //TODO:完成所有兴趣圈类别展示
}

export default Interests;