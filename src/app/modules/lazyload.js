module.exports.lazyLoading = () => {
  const itemsToEntry = [...document.querySelectorAll(".entry")];

  let itemEntryObserver;

  const handleEntry = (entry) => {
    if (entry.isIntersecting) {
      const itemToEntry = entry.target;
      setTimeout(() => {
        itemToEntry.classList.remove("entry");
        itemToEntry.classList.add("entered");
        itemEntryObserver.unobserve(itemToEntry);
      }, 500);
    }
  };

  const createItemObserver = () => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach(handleEntry);
      },
      { rootMargin: "-50px 0px" }
    );
  };

  if ("IntersectionObserver" in window) {
    itemEntryObserver = createItemObserver();
    itemsToEntry.forEach((itemToEntry) =>
      itemEntryObserver.observe(itemToEntry)
    );
  } else {
    itemsToEntry.forEach((itemToEntry) => {
      itemToEntry.classList.remove("entry");
      itemToEntry.classList.add("entered");
    });
  }

  //Lazy Images

  const lazyImages = [...document.querySelectorAll("img.lazy")];

  const loadImage = (lazyImage) => {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    const img = new Image();

    // Function to set the image source
    const setImage = (id) => {
      img.src = `https://picsum.photos/id/${id}/1200/800`;
    };

    // Set the image to load
    setImage(randomImageId);

    // Handles successful image loading
    img.onload = () => {
      lazyImage.src = img.src;
      lazyImage.classList.add("cover");
      lazyImage.classList.remove("lazy");
    };

    // Handles image load error
    img.onerror = () => {
      const newImageId = Math.floor(Math.random() * 1000) + 1;
      setImage(newImageId);
    };
  };

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const lazyImage = entry.target;
          if (entry.isIntersecting && lazyImage.classList.contains("lazy")) {
            loadImage(lazyImage);
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
      { rootMargin: "-100px 0px" }
    );

    lazyImages.forEach((lazyImage) => lazyImageObserver.observe(lazyImage));
  } else {
    lazyImages.forEach(loadImage);
  }
};
