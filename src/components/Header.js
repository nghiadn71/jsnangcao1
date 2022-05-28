import Nav from "./Nav";

const HeaderB = {
    render: () => 
        `
        
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><img width="60" height="60" style="margin-right: 15px" src="./image/logo.jpg" alt=""></svg>
                <span class="fs-4">Zenless Zone Zero</span>
            </a>

            ${Nav.render()}
        </header>
        `
};

// const Header = {
//     // render: function () {
//     //     return '<div>Header Components</div>';
//     // },
//     // render: (name, age, birthday) => ('<div>' + name + '</div>'),
//     // render: (name) => (`<div>${name}, ${age}, ${birthday}</div>`)
//     render: (name = 'WE17101') => 
//     `<div>
//         <h1>${name}</h1>
//         <div>${Nav.render()}</div>
//     </div>`
//     // sau mũi tên là ngoặc tròn -> return kết quả
// }

export default HeaderB;