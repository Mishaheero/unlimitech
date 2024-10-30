module.exports.lazyLoading = () => {
    const itemsToEntry = [].slice.call(document.querySelectorAll('.entry'));

    if ("IntersectionObserver" in window) {
        const itemEntryObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let itemToEntry = entry.target;
                    setTimeout(() => {
                        itemToEntry.classList.remove("entry");
                        itemToEntry.classList.add("entered");
                        itemEntryObserver.unobserve(itemToEntry);
                    }, 500);
                }
            });
        }, {rootMargin: '-100px 0px'});

        itemsToEntry.forEach(function (itemToEntry) {
            itemEntryObserver.observe(itemToEntry);
        });
    } else {
        itemsToEntry.forEach(function (itemToEntry) {
            itemToEntry.classList.remove("entry");
            itemToEntry.classList.add("entered");
        });
    }
    
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                let lazyImage = entry.target;
    
                if (entry.isIntersecting && lazyImage.classList.contains('lazy')) {
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                    } else if (lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.classList.add('cover');
                    lazyImageObserver.unobserve(lazyImage);
                    lazyImage.classList.remove('lazy');
                }
            });
        }, {rootMargin: '0px 0px -300px 0px'});
    
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(function (lazyImage) {
            if (lazyImage.dataset.src) {
                lazyImage.src = lazyImage.dataset.src;
            } else if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImage.classList.add('cover');
            lazyImage.classList.remove('lazy');
        });
    }
    
};
