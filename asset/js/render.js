var apiUrl = 'https://khangminhstone.com/wp-json/wp/v2/product';
fetch(apiUrl)
.then( response => response.json() )
.then(posts => {
    var htmls = posts.slice(0, 8).map(post => {
        return `<div class="col col-lg-3 col-md-6 col-12 id-${post.id}">
        <div class="col-inner">
            <div class="box">
                <div class="box-image">
                    <a href="${post.link}">
                        <img src="${post.yoast_head_json.og_image[0].url}" alt="" class="attachment-original">
                    </a>
                </div>
                <div class="box-text text-left">
                    <div class="box-text-inner">
                        <h4><a href="${post.link}">${post.title.rendered}</a></h4>
                    </div>
                </div>
                <div class="btn_cate">
                    <a href="#">Hoạt động</a>
                </div>
            </div>
        </div>
    </div>`;
    });
    var html = htmls.join('');
    document.querySelector('.section-news .section-content .list-news').innerHTML = html;
})