import Navigo from "navigo";
import HeaderB from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Khởi tạo đối tượng router
const router = new Navigo('/', {linksSelector: 'a'});

function render (content) {
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>'
    document.querySelector('#header').innerHTML = HeaderB.render();
    document.querySelector('#content').innerHTML = content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
});
router.resolve();

// render();








// -----------------------------------------------------------------

// arrow function: const ten_ham = () => {}
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

const s = () => 2 + 3;

function sum (a, b) {
    return a + b;
}; // Cú pháp thông thường

const sum1 = (a, b) => {
    return a + b;
}; // Arrow function có return

const sum2 = (a, b) => a + b; // Nếu chỉ có return

const display = a => console.log(a); // Nếu chỉ có 1 tham số

// Callback: hàm được truyền vào dưới dạng 1 đối số, và thực thi trong 2 hàm

const abc = (print) => {
    const result = sum(2,3);
    // có nhiều cách hiển thị khác nhau, và phải nhận kết quả hiển thị từ result
    print(result);
    // display(result);
    // display1(result);
};

// abc(display);
abc(display1);

const loadScript = (src) => {
    const scriptE = document.createElement('script');
    scriptE.src = src;
    scriptE.onload = () => callback();
};

const khoitaosv = () => {
    var sinhVien = {};
}

loadScript('moment.min.js', khoitaosv);

// đếm số chữ cái trong thông tin user

const countString = (string) => string.length;
const countString2 = (string) => alert(string);

const reciveUser = (user) => {
    // Lấy ra tên
    const username = user.name;
    // nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
    callback(username);
    // countString(username);
};

reciveUser({name: 'nghiadn71'}, countString);
reciveUser({name: 'nghiadn72'}, countString2);