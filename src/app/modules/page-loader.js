module.exports.pageLoad = () => {
    const pageLoader = document.querySelector('.page-loader');
    
    pageLoader.classList.remove('page-loader--loading');
    pageLoader.classList.add('page-loader--loaded');
};
