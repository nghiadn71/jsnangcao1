import tintuc from "../news-data";

const News = {
    render: () =>
    `<div>
        ${tintuc.map((tin) => (
            `
            <div>
                ${tin.id}
            </div>
            <div>
                ${tin.title}
            </div>
            <div>
                ${tin.content}
            </div>
            `
        ))
    }</div>`,

//     render: () => 
//     `
//     <main>

//   <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
//     <div class="carousel-indicators">
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
//     </div>
//     <div class="carousel-inner">
//       <div class="carousel-item">
//         <img src="./image/s1.png">
//         <div class="container">
//           <div class="carousel-caption text-start">
//             <h1>Example headline.</h1>
//             <p>Some representative placeholder content for the first slide of the carousel.</p>
//             <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img src="./image/s2.png">

//         <div class="container">
//           <div class="carousel-caption">
//             <h1>Another example headline.</h1>
//             <p>Some representative placeholder content for the second slide of the carousel.</p>
//             <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item active">
//         <img width="1280px" style="margin-bottom: 50px" src="./image/s3.png">

//         <div class="container">
//         </div>
//       </div>
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>


//   <!-- Marketing messaging and featurettes
//   ================================================== -->
//   <!-- Wrap the rest of the page in another container to center all the content. -->

//   <div class="container marketing">

//     <!-- Three columns of text below the carousel -->
//     <div class="row">
//       <div class="col-lg-4">
//         <img width="120px" height="120px" src="./image/logo.jpg">

//         <h2 class="fw-normal">Heading</h2>
//         <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//         <p><a class="btn btn-secondary" href="#">View details »</a></p>
//       </div><!-- /.col-lg-4 -->
//       <div class="col-lg-4">
//         <img width="120px" height="120px" src="./image/logo.jpg">

//         <h2 class="fw-normal">Heading</h2>
//         <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
//         <p><a class="btn btn-secondary" href="#">View details »</a></p>
//       </div><!-- /.col-lg-4 -->
//       <div class="col-lg-4">
//         <img width="120px" height="120px" src="./image/logo.jpg">

//         <h2 class="fw-normal">Heading</h2>
//         <p>And lastly this, the third column of representative placeholder content.</p>
//         <p><a class="btn btn-secondary" href="#">View details »</a></p>
//       </div><!-- /.col-lg-4 -->
//     </div><!-- /.row -->


//     <!-- START THE FEATURETTES -->

//     <hr class="featurette-divider">

//     <div class="row featurette">
//       <div class="col-md-7">
//         <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
//         <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
//       </div>
//       <div class="col-md-5">
//         <img width="500px" height="500px" src="./image/n1.jpg">

//       </div>
//     </div>

//     <hr class="featurette-divider">

//     <div class="row featurette">
//       <div class="col-md-7 order-md-2">
//         <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
//         <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
//       </div>
//       <div class="col-md-5 order-md-1">
//         <img width="500px" height="500px" src="./image/n2.jpg">

//       </div>
//     </div>

//     <hr class="featurette-divider">

//     <div class="row featurette">
//       <div class="col-md-7">
//         <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
//         <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
//       </div>
//       <div class="col-md-5">
//         <img width="500px" height="500px" src="./image/n3.jpg">

//       </div>
//     </div>

//     <hr class="featurette-divider">

//     <!-- /END THE FEATURETTES -->

//   </div><!-- /.container -->


// </main>
//     `

    // render: function () {
    //     let string = '<div>';

    //     for(let i = 0; i < tintuc.length; i++) {
    //         string += '<div>';
    //         string += tintuc[i].content;
    //         string += '</div>';
    //     }

    //     string += '</div>';

    //     return string;
    // }
};

export default News;